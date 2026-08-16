import * as THREE from 'three'

export function createStabilityZone(
	radius = 2.5,
) {
	const group = new THREE.Group()

	const fillGeometry =
		new THREE.CircleGeometry(
			radius,
			96,
		)

	const fillMaterial =
		new THREE.MeshBasicMaterial({
			color: 0xffffff,
			transparent: true,
			opacity: 0.035,
			side: THREE.DoubleSide,
			depthWrite: false,
		})

	const fill = new THREE.Mesh(
		fillGeometry,
		fillMaterial,
	)

	fill.rotation.x = -Math.PI / 2
	fill.position.y = 0.012

	group.add(fill)

	const ringGeometry =
		new THREE.RingGeometry(
			radius - 0.035,
			radius + 0.035,
			96,
		)

	const ringMaterial =
		new THREE.MeshBasicMaterial({
			color: 0xffffff,
			transparent: true,
			opacity: 0.55,
			side: THREE.DoubleSide,
			depthWrite: false,
		})

	const ring = new THREE.Mesh(
		ringGeometry,
		ringMaterial,
	)

	ring.rotation.x = -Math.PI / 2
	ring.position.y = 0.015

	group.add(ring)

	group.userData.radius = radius
	group.userData.ringMaterial = ringMaterial
	group.userData.fillMaterial = fillMaterial

	return group
}