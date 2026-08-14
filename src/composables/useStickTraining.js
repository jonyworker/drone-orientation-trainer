import {
	ref,
	watch,
} from 'vue'

const WRONG_INPUT_THRESHOLD = 0.20
const CENTER_THRESHOLD = 0.10

/*
 * Level 1
 *
 * 固定成功區：
 * 40%～60%
 */
const LEVEL_1_SUCCESS_MIN = 0.40
const LEVEL_1_SUCCESS_MAX = 0.60

/*
 * Level 2
 *
 * 目標幅度只先使用：
 * 25% / 50% / 75%
 */
const LEVEL_2_TARGETS = [
	0.25,
	0.50,
	0.75,
]

/*
 * Level 2 容許誤差 ±5%
 *
 * 25% → 20～30%
 * 50% → 45～55%
 * 75% → 70～80%
 */
const LEVEL_2_TOLERANCE = 0.05

/*
 * 必須連續停留在成功區多久，
 * 才真正判定成功。
 */
const SUCCESS_HOLD_DURATION = 1000

/*
 * 回中後稍微停頓，
 * 再開始下一題。
 */
const NEXT_ROUND_DELAY = 600

const exercises = [
	{
		id: 'pitch-forward',
		axis: 'pitch',
		direction: 1,
		title: 'FORWARD',
		label: '前進',
		stick: '右搖桿',
		arrow: '↑',
		instruction: '將右搖桿向前推',
	},
	{
		id: 'pitch-backward',
		axis: 'pitch',
		direction: -1,
		title: 'BACKWARD',
		label: '後退',
		stick: '右搖桿',
		arrow: '↓',
		instruction: '將右搖桿向後拉',
	},
	{
		id: 'roll-left',
		axis: 'roll',
		direction: -1,
		title: 'ROLL LEFT',
		label: '左移',
		stick: '右搖桿',
		arrow: '←',
		instruction: '將右搖桿向左推',
	},
	{
		id: 'roll-right',
		axis: 'roll',
		direction: 1,
		title: 'ROLL RIGHT',
		label: '右移',
		stick: '右搖桿',
		arrow: '→',
		instruction: '將右搖桿向右推',
	},
	{
		id: 'yaw-left',
		axis: 'yaw',
		direction: 1,
		title: 'YAW LEFT',
		label: '左轉',
		stick: '左搖桿',
		arrow: '↺',
		instruction: '將左搖桿向左推',
	},
	{
		id: 'yaw-right',
		axis: 'yaw',
		direction: -1,
		title: 'YAW RIGHT',
		label: '右轉',
		stick: '左搖桿',
		arrow: '↻',
		instruction: '將左搖桿向右推',
	},
]

const axisLabels = {
	pitch: 'Pitch',
	roll: 'Roll',
	yaw: 'Yaw',
}

function randomItem(items) {
	return items[
		Math.floor(
			Math.random() * items.length,
		)
		]
}

export function useStickTraining(
	levelSource,
) {
	const currentExercise = ref(null)
	const completed = ref(false)
	const round = ref(0)

	const waitingForStartCenter = ref(false)
	const waitingForCenter = ref(false)
	const waitingForNextRound = ref(false)

	const errorType = ref(null)
	const errorMessage = ref('')

	/*
	 * 目前這一題的成功區間。
	 *
	 * Level 1：
	 * 固定 40～60%
	 *
	 * Level 2：
	 * 依照隨機目標動態變化。
	 */
	const successMin = ref(
		LEVEL_1_SUCCESS_MIN,
	)

	const successMax = ref(
		LEVEL_1_SUCCESS_MAX,
	)

	/*
	 * Level 2 題目目標。
	 *
	 * Level 1 時為 null。
	 *
	 * Level 2 例如：
	 * 0.25 / 0.50 / 0.75
	 */
	const targetValue = ref(null)

	/*
	 * 0～1
	 *
	 * 代表目前已經在成功區內
	 * 維持了多少比例。
	 */
	const successHoldProgress = ref(0)

	let nextTimer = null
	let previousExerciseId = null
	let previousTargetValue = null

	/*
	 * performance.now() 的開始時間。
	 * null 表示目前尚未進入成功區。
	 */
	let successHoldStartedAt = null

	function getLevel() {
		return Number(
			levelSource?.value
			?? levelSource
			?? 1,
		)
	}

	function clearError() {
		errorType.value = null
		errorMessage.value = ''
	}

	function clearNextTimer() {
		if (nextTimer !== null) {
			clearTimeout(nextTimer)
			nextTimer = null
		}
	}

	function resetSuccessHold() {
		successHoldStartedAt = null
		successHoldProgress.value = 0
	}

	function resetTargetRange() {
		const level = getLevel()

		/*
		 * Level 2
		 */
		if (level === 2) {
			const availableTargets =
				LEVEL_2_TARGETS.filter(
					value =>
						value !== previousTargetValue,
				)

			const target =
				randomItem(
					availableTargets.length
						? availableTargets
						: LEVEL_2_TARGETS,
				)

			previousTargetValue = target
			targetValue.value = target

			successMin.value =
				Math.max(
					0,
					target
					- LEVEL_2_TOLERANCE,
				)

			successMax.value =
				Math.min(
					1,
					target
					+ LEVEL_2_TOLERANCE,
				)

			return
		}

		/*
		 * Level 1
		 */
		targetValue.value = null

		successMin.value =
			LEVEL_1_SUCCESS_MIN

		successMax.value =
			LEVEL_1_SUCCESS_MAX
	}

	function isStickCentered(input) {
		return (
			Math.abs(
				Number(input?.pitch ?? 0),
			) <= CENTER_THRESHOLD
			&&
			Math.abs(
				Number(input?.roll ?? 0),
			) <= CENTER_THRESHOLD
			&&
			Math.abs(
				Number(input?.yaw ?? 0),
			) <= CENTER_THRESHOLD
		)
	}

	function pickExercise() {
		clearNextTimer()

		const available =
			exercises.filter(
				exercise =>
					exercise.id
					!== previousExerciseId,
			)

		const exercise =
			randomItem(
				available.length
					? available
					: exercises,
			)

		previousExerciseId = exercise.id

		resetTargetRange()

		currentExercise.value = {
			...exercise,
			currentValue: 0,

			/*
			 * HUD 之後可以直接使用這個值。
			 *
			 * Level 1 = null
			 *
			 * Level 2 =
			 * 0.25 / 0.50 / 0.75
			 */
			targetValue:
			targetValue.value,
		}

		completed.value = false
		waitingForCenter.value = false
		waitingForNextRound.value = false

		clearError()
		resetSuccessHold()

		round.value += 1
	}

	function scheduleNextRound() {
		if (waitingForNextRound.value) {
			return
		}

		waitingForNextRound.value = true

		nextTimer = setTimeout(
			() => {
				waitingForNextRound.value = false
				pickExercise()
			},
			NEXT_ROUND_DELAY,
		)
	}

	function start() {
		clearNextTimer()

		currentExercise.value = null

		round.value = 0
		previousExerciseId = null
		previousTargetValue = null

		completed.value = false

		waitingForStartCenter.value = true
		waitingForCenter.value = false
		waitingForNextRound.value = false

		clearError()
		resetSuccessHold()
		resetTargetRange()
	}

	function stop() {
		clearNextTimer()

		currentExercise.value = null

		completed.value = false

		waitingForStartCenter.value = false
		waitingForCenter.value = false
		waitingForNextRound.value = false

		clearError()
		resetSuccessHold()
	}

	function detectWrongAxis(
		input,
		targetAxis,
	) {
		const axes = [
			'pitch',
			'roll',
			'yaw',
		]

		return axes.find((axis) => {
			if (axis === targetAxis) {
				return false
			}

			const value =
				Math.abs(
					Number(
						input?.[axis] ?? 0,
					),
				)

			return (
				value
				>= WRONG_INPUT_THRESHOLD
			)
		})
	}

	function update(input) {
		/*
		 * 訓練開始前：
		 * 先確認 Pitch / Roll / Yaw 都回中。
		 */
		if (waitingForStartCenter.value) {
			if (isStickCentered(input)) {
				waitingForStartCenter.value =
					false

				scheduleNextRound()
			}

			return
		}

		/*
		 * 已回中，
		 * 正在等待下一題。
		 */
		if (waitingForNextRound.value) {
			return
		}

		if (!currentExercise.value) {
			return
		}

		/*
		 * 答對後，
		 * 等待使用者把搖桿放開回中。
		 */
		if (waitingForCenter.value) {
			if (isStickCentered(input)) {
				waitingForCenter.value =
					false

				resetSuccessHold()
				scheduleNextRound()
			}

			return
		}

		if (completed.value) {
			return
		}

		const exercise =
			currentExercise.value

		const rawValue =
			Number(
				input?.[exercise.axis] ?? 0,
			)

		exercise.currentValue = rawValue

		/*
		 * 將正確方向統一轉成正值。
		 */
		const directionalValue =
			rawValue * exercise.direction

		/*
		 * 同一 Axis，
		 * 但方向相反。
		 */
		if (
			directionalValue
			<= -WRONG_INPUT_THRESHOLD
		) {
			resetSuccessHold()

			errorType.value =
				'wrong-direction'

			errorMessage.value =
				'方向相反，請往指定方向操作'

			return
		}

		/*
		 * 操作了其他 Axis。
		 */
		const wrongAxis =
			detectWrongAxis(
				input,
				exercise.axis,
			)

		if (wrongAxis) {
			resetSuccessHold()

			errorType.value =
				'wrong-axis'

			errorMessage.value =
				`目前操作的是 ${axisLabels[wrongAxis]}`

			return
		}

		/*
		 * 超過目前成功區上限。
		 */
		if (
			directionalValue
			> successMax.value
		) {
			resetSuccessHold()

			errorType.value =
				'over-input'

			errorMessage.value =
				'操作過量，請減少推桿幅度'

			return
		}

		/*
		 * 尚未進入目前成功區。
		 */
		if (
			directionalValue
			< successMin.value
		) {
			resetSuccessHold()
			clearError()

			return
		}

		/*
		 * 已進入成功區。
		 */
		clearError()

		const now = performance.now()

		if (successHoldStartedAt === null) {
			successHoldStartedAt = now
		}

		const heldDuration =
			now - successHoldStartedAt

		successHoldProgress.value =
			Math.min(
				1,
				heldDuration
				/ SUCCESS_HOLD_DURATION,
			)

		/*
		 * 還沒保持滿 1 秒。
		 */
		if (
			heldDuration
			< SUCCESS_HOLD_DURATION
		) {
			return
		}

		/*
		 * 成功。
		 */
		successHoldProgress.value = 1

		completed.value = true
		waitingForCenter.value = true

		clearError()
	}

	/*
	 * 如果使用者直接從 Lv.1
	 * 切到 Lv.2，或反過來，
	 * 重新開始訓練流程。
	 */
	if (levelSource?.value !== undefined) {
		watch(
			levelSource,
			() => {
				start()
			},
		)
	}

	return {
		currentExercise,
		completed,
		round,

		waitingForStartCenter,
		waitingForCenter,
		waitingForNextRound,

		errorType,
		errorMessage,

		successMin,
		successMax,
		targetValue,

		successHoldProgress,

		start,
		stop,
		update,
	}
}