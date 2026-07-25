import * as THREE from 'three'

export function createScene() {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x090b10)
  scene.fog = new THREE.Fog(0x090b10, 24, 58)

  const ambient = new THREE.HemisphereLight(0xc9e7ff, 0x20242a, 1.45)
  scene.add(ambient)

  const sun = new THREE.DirectionalLight(0xffffff, 2.2)
  sun.position.set(8, 14, 6)
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.camera.left = -18
  sun.shadow.camera.right = 18
  sun.shadow.camera.top = 18
  sun.shadow.camera.bottom = -18
  scene.add(sun)

  return scene
}
