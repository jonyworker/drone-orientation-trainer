import * as THREE from 'three'
import { normalizedDegrees } from '@/utils/angles.js'

const UP_AXIS = new THREE.Vector3(0, 1, 0)

export class DronePhysics {
  constructor(drone) {
    this.drone = drone

    this.velocity = new THREE.Vector3()

    // 搖桿輸入產生的機體座標加速度。
    this.localAcceleration = new THREE.Vector3()

    // 轉換成世界座標後的操控加速度。
    this.worldAcceleration = new THREE.Vector3()

    /*
     * 每幀從 WindSystem 複製進來的風力。
     *
     * 這不是保存初始風向，而只是避免直接操作
     * WindSystem 傳進來的原始 Vector3。
     */
    this.currentWindAcceleration = new THREE.Vector3()

    this.state = {
      yaw: 0,
      pitchVisual: 0,
      rollVisual: 0,
    }

    this.randomYawTimer = 0
  }

  reset(yaw = 0) {
    this.velocity.set(0, 0, 0)

    this.localAcceleration.set(0, 0, 0)
    this.worldAcceleration.set(0, 0, 0)
    this.currentWindAcceleration.set(0, 0, 0)

    this.state.yaw = yaw
    this.state.pitchVisual = 0
    this.state.rollVisual = 0

    this.randomYawTimer = 0

    this.drone.position.set(0, 1.5, 0)
    this.drone.rotation.set(0, yaw, 0)
  }

  update(
    delta,
    input,
    windAcceleration,
    trainingMode,
  ) {
    const safeDelta =
      Number.isFinite(delta)
        ? THREE.MathUtils.clamp(delta, 0, 0.05)
        : 0

    this.updateRandomOrientation(
      safeDelta,
      trainingMode,
    )

    /*
     * Yaw 操作。
     */
    const yawRate =
      THREE.MathUtils.degToRad(95)

    this.state.yaw +=
      input.yaw
      * yawRate
      * safeDelta

    /*
     * 視覺傾斜。
     */
    const maxTilt =
      THREE.MathUtils.degToRad(17)

    const visualResponse =
      1 - Math.exp(-9 * safeDelta)

    this.state.pitchVisual =
      THREE.MathUtils.lerp(
        this.state.pitchVisual,
        input.pitch * maxTilt,
        visualResponse,
      )

    this.state.rollVisual =
      THREE.MathUtils.lerp(
        this.state.rollVisual,
        -input.roll * maxTilt,
        visualResponse,
      )

    /*
     * 搖桿輸入先以機體座標建立加速度，
     * 再依目前 yaw 轉成世界座標。
     */
    this.localAcceleration.set(
      input.roll * 4.4,
      input.throttle * 4.1,
      -input.pitch * 4.4,
    )

    this.worldAcceleration
      .copy(this.localAcceleration)
      .applyAxisAngle(
        UP_AXIS,
        this.state.yaw,
      )

    /*
     * 加入操控造成的加速度。
     */
    this.velocity.addScaledVector(
      this.worldAcceleration,
      safeDelta,
    )

    /*
     * 每一幀都重新讀取最新風力。
     *
     * 不會沿用 reset 時的風，也不會保存第一次收到的風向。
     */
    this.updateWindAcceleration(
      windAcceleration,
    )

    this.velocity.addScaledVector(
      this.currentWindAcceleration,
      safeDelta,
    )

    /*
     * 空氣阻力。
     *
     * 風向改變後，舊速度不會瞬間消失，
     * 而是逐漸受到新風修正，軌跡會自然彎曲。
     */
    const horizontalDrag =
      Math.exp(-0.66 * safeDelta)

    const verticalDrag =
      Math.exp(-1.25 * safeDelta)

    this.velocity.x *= horizontalDrag
    this.velocity.z *= horizontalDrag
    this.velocity.y *= verticalDrag

    /*
     * 限制水平速度。
     */
    const horizontalSpeed =
      Math.hypot(
        this.velocity.x,
        this.velocity.z,
      )

    if (horizontalSpeed > 5.3) {
      const scale =
        5.3 / horizontalSpeed

      this.velocity.x *= scale
      this.velocity.z *= scale
    }

    /*
     * 限制垂直速度。
     */
    this.velocity.y =
      THREE.MathUtils.clamp(
        this.velocity.y,
        -2.8,
        2.8,
      )

    /*
     * 更新無人機位置。
     */
    this.drone.position.addScaledVector(
      this.velocity,
      safeDelta,
    )

    this.clampAltitude()

    /*
     * 更新無人機姿態。
     */
    this.drone.rotation.set(
      this.state.pitchVisual,
      this.state.yaw,
      this.state.rollVisual,
      'YXZ',
    )

    /*
     * 更新旋翼動畫。
     */
    for (
      const rotor
      of this.drone.userData.rotors ?? []
      ) {
      rotor.rotation.y +=
        rotor.userData.spinDirection
        * (
          18
          + Math.abs(input.throttle) * 14
        )
        * safeDelta
    }

    return {
      altitude: this.drone.position.y,
      speed: this.velocity.length(),
      yaw: normalizedDegrees(
        this.state.yaw,
      ),
      distance: Math.hypot(
        this.drone.position.x,
        this.drone.position.z,
      ),
    }
  }

  /**
   * 每幀複製最新的世界座標風力。
   *
   * 若 WindSystem 傳入：
   *   北方 = -Z
   *   東方 = +X
   *   南方 = +Z
   *   西方 = -X
   *
   * 此處會原樣套用，不再旋轉，也不受 drone yaw 影響。
   */
  updateWindAcceleration(
    windAcceleration,
  ) {
    if (
      !windAcceleration
      || !Number.isFinite(
        windAcceleration.x,
      )
      || !Number.isFinite(
        windAcceleration.y,
      )
      || !Number.isFinite(
        windAcceleration.z,
      )
    ) {
      this.currentWindAcceleration.set(
        0,
        0,
        0,
      )

      return
    }

    this.currentWindAcceleration.copy(
      windAcceleration,
    )

    /*
     * 這裡刻意不做：
     *
     * applyAxisAngle(...)
     * negate()
     * normalize()
     *
     * 因為 WindSystem 傳來的已經是
     * 完整的世界座標加速度向量。
     */
  }

  updateRandomOrientation(
    delta,
    mode,
  ) {
    if (mode !== 'random') {
      this.randomYawTimer = 0
      return
    }

    this.randomYawTimer += delta

    if (this.randomYawTimer >= 8) {
      const choices = [
        45,
        90,
        135,
        180,
      ]

      const choice =
        choices[
          Math.floor(
            Math.random()
            * choices.length,
          )
          ]

      this.state.yaw +=
        THREE.MathUtils.degToRad(
          choice,
        )

      this.randomYawTimer = 0
    }
  }

  clampAltitude() {
    if (this.drone.position.y < 0.35) {
      this.drone.position.y = 0.35

      if (this.velocity.y < 0) {
        this.velocity.y = 0
      }
    }

    if (this.drone.position.y > 5.2) {
      this.drone.position.y = 5.2

      if (this.velocity.y > 0) {
        this.velocity.y = 0
      }
    }
  }
}