import * as THREE from 'three'

export class ScoreSystem {
  constructor(zoneHalf = 6) {
    this.zoneHalf = zoneHalf
    this.score = 0
  }

  reset() {
    this.score = 0
  }

  update(delta, distance, outside) {
    const centerFactor = THREE.MathUtils.clamp(1 - distance / this.zoneHalf, 0, 1)
    this.score = outside
      ? Math.max(0, this.score - delta * 35)
      : this.score + delta * (10 + centerFactor * 90)
    return this.score
  }
}
