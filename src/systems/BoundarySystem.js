export class BoundarySystem {
  constructor(size = 12) {
    this.size = size
    this.half = size / 2
    this.wasOutside = false
    this.count = 0
  }

  reset() {
    this.wasOutside = false
    this.count = 0
  }

  update(position) {
    const outside = Math.abs(position.x) > this.half || Math.abs(position.z) > this.half
    if (outside && !this.wasOutside) this.count += 1
    this.wasOutside = outside
    return { outside, count: this.count }
  }
}
