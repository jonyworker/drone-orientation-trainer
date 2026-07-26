import * as THREE from 'three'

export class ChallengeSystem {
	constructor() {
		this.challenge = null

		this.stepIndex = 0
		this.stepStartPosition =
			new THREE.Vector3()

		this.progress = 0
		this.completed = false
	}

	start(challenge, position) {
		this.challenge = challenge
		this.stepIndex = 0
		this.progress = 0
		this.completed = false

		this.stepStartPosition.copy(position)

		return this.getState()
	}

	reset() {
		this.challenge = null
		this.stepIndex = 0
		this.progress = 0
		this.completed = false

		this.stepStartPosition.set(0, 0, 0)

		return this.getState()
	}

	update(position) {
		if (
			!this.challenge
			|| this.completed
		) {
			return this.getState()
		}

		const currentStep =
			this.challenge.steps[this.stepIndex]

		if (!currentStep) {
			this.completed = true
			return this.getState()
		}

		const displacement =
			position
				.clone()
				.sub(this.stepStartPosition)

		this.progress = Math.max(
			0,
			getDirectionalProgress(
				displacement,
				currentStep.direction,
			),
		)

		if (
			this.progress
			>= currentStep.distance
		) {
			this.stepIndex += 1
			this.progress = 0

			/*
			 * 下一步從目前位置開始計算。
			 *
			 * 例如：
			 * 第一段往北 3 公尺完成後，
			 * 第二段便從北方終點開始計算往南距離。
			 */
			this.stepStartPosition.copy(position)

			if (
				this.stepIndex
				>= this.challenge.steps.length
			) {
				this.completed = true
			}
		}

		return this.getState()
	}

	getState() {
		const currentStep =
			this.challenge?.steps[this.stepIndex]
			?? null

		return {
			active: Boolean(this.challenge),

			id:
				this.challenge?.id
				?? null,

			title:
				this.challenge?.title
				?? '',

			description:
				this.challenge?.description
				?? '',

			stepIndex:
			this.stepIndex,

			totalSteps:
				this.challenge?.steps.length
				?? 0,

			currentStep:
				currentStep?.label
				?? '',

			targetDistance:
				currentStep?.distance
				?? 0,

			progress:
			this.progress,

			completed:
			this.completed,
		}
	}
}

function getDirectionalProgress(
	displacement,
	direction,
) {
	switch (direction) {
		case 'north':
			return -displacement.z

		case 'south':
			return displacement.z

		case 'east':
			return displacement.x

		case 'west':
			return -displacement.x

		default:
			return 0
	}
}