import * as THREE from 'three'

function mesh(geometry, material) {
  const item = new THREE.Mesh(geometry, material)
  item.castShadow = true
  item.receiveShadow = true
  return item
}

export function createDrone() {
  const drone = new THREE.Group()
  drone.name = 'trainer-drone'

  const dark = new THREE.MeshStandardMaterial({ color: 0x171a20, roughness: 0.5 })
  const front = new THREE.MeshStandardMaterial({ color: 0xd8ff3e, roughness: 0.4 })
  const rear = new THREE.MeshStandardMaterial({ color: 0x494f5d, roughness: 0.6 })
  const lens = new THREE.MeshStandardMaterial({ color: 0x050608, metalness: 0.2, roughness: 0.15 })
  const propMaterial = new THREE.MeshStandardMaterial({
    color: 0x9aa1ad,
    transparent: true,
    opacity: 0.45,
    roughness: 0.5,
  })

  const body = mesh(new THREE.BoxGeometry(0.72, 0.22, 0.92), dark)
  body.position.y = 0.06
  drone.add(body)

  const top = mesh(new THREE.BoxGeometry(0.48, 0.17, 0.54), front)
  top.position.set(0, 0.22, -0.1)
  drone.add(top)

  const nose = mesh(new THREE.ConeGeometry(0.18, 0.48, 4), front)
  nose.rotation.x = -Math.PI / 2
  nose.rotation.z = Math.PI / 4
  nose.position.set(0, 0.13, -0.68)
  drone.add(nose)

  const cameraHousing = mesh(new THREE.BoxGeometry(0.25, 0.18, 0.18), dark)
  cameraHousing.position.set(0, -0.03, -0.56)
  drone.add(cameraHousing)

  const cameraLens = mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.055, 24), lens)
  cameraLens.rotation.x = Math.PI / 2
  cameraLens.position.set(0, -0.03, -0.665)
  drone.add(cameraLens)

  const armGeometry = new THREE.BoxGeometry(1.55, 0.09, 0.11)
  const armA = mesh(armGeometry, front)
  armA.rotation.y = Math.PI / 4
  armA.position.y = 0.04
  drone.add(armA)

  const armB = mesh(armGeometry, rear)
  armB.rotation.y = -Math.PI / 4
  armB.position.y = 0.04
  drone.add(armB)

  const rotorPositions = [
    [-0.56, 0.11, -0.56],
    [0.56, 0.11, -0.56],
    [-0.56, 0.11, 0.56],
    [0.56, 0.11, 0.56],
  ]

  const rotors = []

  rotorPositions.forEach(([x, y, z], index) => {
    const motor = mesh(
      new THREE.CylinderGeometry(0.11, 0.13, 0.16, 20),
      index < 2 ? front : rear,
    )
    motor.position.set(x, y, z)
    drone.add(motor)

    const rotor = mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.018, 36), propMaterial)
    rotor.position.set(x, y + 0.13, z)
    rotor.userData.spinDirection = index % 2 === 0 ? 1 : -1
    drone.add(rotor)
    rotors.push(rotor)
  })

  const frontLightMaterial = new THREE.MeshBasicMaterial({ color: 0xf2ff75 })
  const rearLightMaterial = new THREE.MeshBasicMaterial({ color: 0xff3948 })

  const leftFrontLight = mesh(new THREE.SphereGeometry(0.045, 12, 12), frontLightMaterial)
  leftFrontLight.position.set(-0.28, 0.11, -0.48)
  drone.add(leftFrontLight)

  const rightFrontLight = leftFrontLight.clone()
  rightFrontLight.position.x = 0.28
  drone.add(rightFrontLight)

  const leftRearLight = mesh(new THREE.SphereGeometry(0.045, 12, 12), rearLightMaterial)
  leftRearLight.position.set(-0.28, 0.11, 0.48)
  drone.add(leftRearLight)

  const rightRearLight = leftRearLight.clone()
  rightRearLight.position.x = 0.28
  drone.add(rightRearLight)

  const headingArrow = new THREE.ArrowHelper(
    new THREE.Vector3(0, 0, -1),
    new THREE.Vector3(0, 0.55, 0),
    1.1,
    0xd8ff3e,
    0.22,
    0.13,
  )
  headingArrow.name = 'heading-arrow'
  drone.add(headingArrow)

  drone.userData.rotors = rotors
  drone.userData.headingArrow = headingArrow

  return drone
}
