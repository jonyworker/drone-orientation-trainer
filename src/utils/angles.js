import * as THREE from 'three'

export function normalizedDegrees(radians) {
  return ((THREE.MathUtils.radToDeg(radians) % 360) + 360) % 360
}

export function directionArrow(degrees) {
  const arrows = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖']
  const normalized = ((degrees % 360) + 360) % 360
  return arrows[Math.round(normalized / 45) % 8]
}
