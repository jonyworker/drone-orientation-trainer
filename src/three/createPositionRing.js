import * as THREE from 'three'

export function createPositionRing() {
	const group = new THREE.Group()

	const ringGeometry = new THREE.RingGeometry(0.34, 0.4, 64)

	const ringMaterial = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		transparent: true,
		opacity: 0.42,
		side: THREE.DoubleSide,
		depthWrite: false,
		depthTest: true,
	})

	const ring = new THREE.Mesh(ringGeometry, ringMaterial)

	// RingGeometry 原本朝向 Z 軸，轉成平貼地面
	ring.rotation.x = -Math.PI / 2

	// 稍微高於地面，避免與地板閃爍
	ring.position.y = 0.018

	// Position Ring 本身不參與陰影
	ring.castShadow = false
	ring.receiveShadow = false

	group.add(ring)

	// 增加很淡的中心點，方便精確判斷投影位置
	const centerGeometry = new THREE.CircleGeometry(0.035, 32)

	const centerMaterial = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		transparent: true,
		opacity: 0.55,
		side: THREE.DoubleSide,
		depthWrite: false,
	})

	const center = new THREE.Mesh(centerGeometry, centerMaterial)

	center.rotation.x = -Math.PI / 2
	center.position.y = 0.019
	center.castShadow = false
	center.receiveShadow = false

	group.add(center)

	return group
}