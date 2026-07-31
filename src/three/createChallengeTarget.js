import * as THREE from 'three'

export function createChallengeTarget() {
  const group = new THREE.Group()

  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(0.72, 64),
    new THREE.MeshBasicMaterial({
      color: 0xa3e635,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  )
  disc.rotation.x = -Math.PI / 2
  disc.position.y = 0.025

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.58, 0.72, 64),
    new THREE.MeshBasicMaterial({
      color: 0xd9f99d,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  )
  ring.rotation.x = -Math.PI / 2
  ring.position.y = 0.03

  group.add(disc, ring)
  group.visible = false
  return group
}
