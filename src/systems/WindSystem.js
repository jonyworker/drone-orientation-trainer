import * as THREE from 'three'

/**
 * 世界座標風場。
 *
 * 對外 direction 一律使用羅盤角度，表示風「吹向」哪裡：
 *   0°   = 北方 = -Z
 *   90°  = 東方 = +X
 *   180° = 南方 = +Z
 *   270° = 西方 = -X
 *
 * 模式：
 *   none   = 無風
 *   breeze = 微風，主風向固定，只小幅游移
 *   gusty  = 陣風，會間歇性明顯改變風向
 */
export class WindSystem {
  constructor() {
    this.mode = 'none'

    // radians，0 代表北方（-Z）。
    this.baseDirection = 0
    this.currentDirection = 0
    this.targetDirection = 0

    this.baseSpeed = 0
    this.currentSpeed = 0
    this.targetSpeed = 0

    this.nextSpeedChangeAt = 0
    this.nextDirectionChangeAt = 0
    this.lastElapsedTime = 0

    this.acceleration = new THREE.Vector3()
  }

  reset(mode = 'none') {
    this.mode = mode
    this.lastElapsedTime = 0

    if (mode === 'none') {
      this.baseDirection = 0
      this.currentDirection = 0
      this.targetDirection = 0

      this.baseSpeed = 0
      this.currentSpeed = 0
      this.targetSpeed = 0

      this.nextSpeedChangeAt = 0
      this.nextDirectionChangeAt = 0

      this.acceleration.set(0, 0, 0)

      return this.getState()
    }

    // 每次重置都隨機產生初始風向。
    this.baseDirection = Math.random() * Math.PI * 2
    this.currentDirection = this.baseDirection
    this.targetDirection = this.baseDirection

    if (mode === 'gusty') {
      this.baseSpeed = 0.42
    } else {
      if (mode === 'gusty') {
        this.baseSpeed = 0.42
      } else {
        this.baseSpeed = 0.34
      }
    }

    this.currentSpeed = this.baseSpeed
    this.targetSpeed = this.baseSpeed

    this.nextSpeedChangeAt = 1.5

    this.nextDirectionChangeAt =
      mode === 'gusty'
        ? 4
        : 3

    this.updateAcceleration()

    return this.getState()
  }

  update(delta, elapsedTime = 0) {
    const safeDelta = Number.isFinite(delta)
      ? THREE.MathUtils.clamp(delta, 0, 0.05)
      : 0

    const safeElapsedTime = Number.isFinite(elapsedTime)
      ? Math.max(0, elapsedTime)
      : 0

    if (this.mode === 'none') {
      this.acceleration.set(0, 0, 0)
      this.lastElapsedTime = safeElapsedTime
      return this.getState()
    }

    // 偵測遊戲重新計時。
    if (safeElapsedTime < this.lastElapsedTime) {
      this.nextSpeedChangeAt =
        safeElapsedTime + THREE.MathUtils.randFloat(1.2, 2.4)

      this.nextDirectionChangeAt =
        safeElapsedTime
        + (
          this.mode === 'gusty'
            ? THREE.MathUtils.randFloat(3, 5)
            : THREE.MathUtils.randFloat(2.5, 4)
        )
    }

    this.lastElapsedTime = safeElapsedTime

    this.updateSpeedTarget(safeElapsedTime)
    this.updateDirectionTarget(safeElapsedTime)

    const speedResponse =
      this.mode === 'gusty'
        ? 1.8
        : 1.2

    const directionResponse =
      this.mode === 'gusty'
        ? 1.6
        : 0.7

    this.currentSpeed = THREE.MathUtils.damp(
      this.currentSpeed,
      this.targetSpeed,
      speedResponse,
      safeDelta,
    )

    this.currentDirection = dampAngle(
      this.currentDirection,
      this.targetDirection,
      directionResponse,
      safeDelta,
    )

    this.updateAcceleration()

    return this.getState()
  }

  updateSpeedTarget(elapsedTime) {
    if (elapsedTime < this.nextSpeedChangeAt) {
      return
    }

    if (this.mode === 'gusty') {
      /*
       * 陣風模式：
       * 偶爾有較明顯的風速增強。
       */
      const isStrongGust = Math.random() < 0.35

      const scale = isStrongGust
        ? THREE.MathUtils.randFloat(1.25, 1.7)
        : THREE.MathUtils.randFloat(0.72, 1.2)

      this.targetSpeed = this.baseSpeed * scale

      this.nextSpeedChangeAt =
        elapsedTime + THREE.MathUtils.randFloat(1.2, 3)
    } else {
      /*
       * 微風模式：
       * 風速只做柔和起伏。
       */
      this.targetSpeed =
        this.baseSpeed
        * THREE.MathUtils.randFloat(0.78, 1.18)

      this.nextSpeedChangeAt =
        elapsedTime + THREE.MathUtils.randFloat(1.8, 3.8)
    }
  }

  updateDirectionTarget(elapsedTime) {
    if (elapsedTime < this.nextDirectionChangeAt) {
      return
    }

    if (this.mode === 'gusty') {
      /*
       * 陣風模式：
       * 會突然選擇一個新的風向目標。
       *
       * 最少偏轉 35°，最多偏轉 120°，
       * 避免每次只改一點點，看不出差異。
       */
      const directionSign =
        Math.random() < 0.5
          ? -1
          : 1

      const turnDegrees =
        THREE.MathUtils.randFloat(35, 120)

      const turnRadians =
        THREE.MathUtils.degToRad(
          turnDegrees * directionSign,
        )

      /*
       * 以目前風向為基礎改變，
       * 因此可以連續累積，不會永遠被鎖在初始方向附近。
       */
      this.targetDirection =
        normalizeRadians(
          this.currentDirection + turnRadians,
        )

      this.baseDirection = this.targetDirection

      this.nextDirectionChangeAt =
        elapsedTime + THREE.MathUtils.randFloat(5, 10)
    } else {
      /*
       * 微風模式：
       * 固定主風向，只在附近 ±7° 緩慢游移。
       */
      const offset =
        THREE.MathUtils.degToRad(
          THREE.MathUtils.randFloat(-7, 7),
        )

      this.targetDirection =
        normalizeRadians(
          this.baseDirection + offset,
        )

      this.nextDirectionChangeAt =
        elapsedTime + THREE.MathUtils.randFloat(3.5, 6.5)
    }
  }

  updateAcceleration() {
    /*
     * Three.js 水平世界座標：
     *
     * 北方 = -Z
     * 東方 = +X
     * 南方 = +Z
     * 西方 = -X
     */
    this.acceleration.set(
      Math.sin(this.currentDirection) * this.currentSpeed,
      0,
      -Math.cos(this.currentDirection) * this.currentSpeed,
    )
  }

  getState() {
    return {
      acceleration: this.acceleration.clone(),
      speed: this.acceleration.length(),
      direction: worldVectorToCompassDegrees(
        this.acceleration,
      ),
    }
  }
}

function worldVectorToCompassDegrees(vector) {
  if (!vector || vector.lengthSq() === 0) {
    return 0
  }

  const radians = Math.atan2(
    vector.x,
    -vector.z,
  )

  const degrees =
    THREE.MathUtils.radToDeg(radians)

  return ((degrees % 360) + 360) % 360
}

function dampAngle(
  current,
  target,
  lambda,
  delta,
) {
  const difference = Math.atan2(
    Math.sin(target - current),
    Math.cos(target - current),
  )

  return current
    + difference
    * (1 - Math.exp(-lambda * delta))
}

function normalizeRadians(radians) {
  return Math.atan2(
    Math.sin(radians),
    Math.cos(radians),
  )
}