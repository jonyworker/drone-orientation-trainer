import * as THREE from 'three'

export class CameraController {
  constructor(camera) {
    this.camera = camera
    this.offset = new THREE.Vector3(9.5, 7.5, 11.5)
    this.targetPosition = new THREE.Vector3()
    this.lookTarget = new THREE.Vector3()
    this.preset = null
  }

  setPreset(heightOption, bearingOption, dronePosition, immediate = false) {
    this.preset = heightOption
    const bearing = THREE.MathUtils.degToRad(bearingOption.degrees)
    this.offset.set(
      Math.sin(bearing) * heightOption.distance,
      heightOption.height,
      Math.cos(bearing) * heightOption.distance,
    )

    if (immediate) {
      this.camera.position.set(
        dronePosition.x + this.offset.x,
        this.offset.y,
        dronePosition.z + this.offset.z,
      )
      this.camera.lookAt(dronePosition.x, heightOption.lookHeight, dronePosition.z)
    }
  }

  update(delta, dronePosition) {
    if (!this.preset) return
    const followAmount = 1 - Math.exp(-2.1 * delta)
    this.targetPosition.set(
      dronePosition.x + this.offset.x,
      this.offset.y,
      dronePosition.z + this.offset.z,
    )
    this.camera.position.lerp(this.targetPosition, followAmount)
    this.lookTarget.set(
      dronePosition.x,
      Math.max(this.preset.lookHeight, dronePosition.y),
      dronePosition.z,
    )
    this.camera.lookAt(this.lookTarget)
  }
}
