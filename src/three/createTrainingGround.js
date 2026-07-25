import * as THREE from 'three'

export function createTrainingGround(scene, zoneSize = 12) {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(80, 80),
    new THREE.MeshStandardMaterial({ color: 0x11151b, roughness: 0.92 }),
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  const grid = new THREE.GridHelper(80, 80, 0x3c444f, 0x232a33)
  grid.position.y = 0.006
  scene.add(grid)

  const half = zoneSize / 2
  const corners = [
    [-half, 0.03, -half],
    [half, 0.03, -half],
    [half, 0.03, half],
    [-half, 0.03, half],
  ]

  const points = corners.map(([x, y, z]) => new THREE.Vector3(x, y, z))
  points.push(points[0].clone())

  const boundaryGeometry = new THREE.BufferGeometry().setFromPoints(points)
  const boundaryMaterial = new THREE.LineBasicMaterial({ color: 0xd8ff3e })
  const boundary = new THREE.Line(boundaryGeometry, boundaryMaterial)
  scene.add(boundary)

  const centerRing = new THREE.Mesh(
    new THREE.RingGeometry(0.38, 0.47, 48),
    new THREE.MeshBasicMaterial({ color: 0xd8ff3e, side: THREE.DoubleSide }),
  )
  centerRing.rotation.x = -Math.PI / 2
  centerRing.position.y = 0.012
  scene.add(centerRing)

  const poleGeometry = new THREE.CylinderGeometry(0.035, 0.035, 1.8, 12)
  const poleMaterial = new THREE.MeshStandardMaterial({ color: 0xd8ff3e })

  for (const [x, , z] of corners) {
    const pole = new THREE.Mesh(poleGeometry, poleMaterial)
    pole.position.set(x, 0.9, z)
    pole.castShadow = true
    scene.add(pole)
  }

  return { ground, grid, boundary, centerRing }
}
