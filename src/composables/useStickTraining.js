import {
	ref,
} from 'vue'

const WRONG_INPUT_THRESHOLD = 0.20
const CENTER_THRESHOLD = 0.10

/*
 * Level 1 成功區間
 *
 * 正確方向的操作落在 20%～40%
 * 才進入成功區。
 */
const SUCCESS_MIN = 0.40
const SUCCESS_MAX = 0.60

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
		arrow: '←',
		instruction: '將左搖桿向左推',
	},
	{
		id: 'yaw-right',
		axis: 'yaw',
		direction: -1,
		title: 'YAW RIGHT',
		label: '右轉',
		stick: '左搖桿',
		arrow: '→',
		instruction: '將左搖桿向右推',
	},
]

const axisLabels = {
	pitch: 'Pitch',
	roll: 'Roll',
	yaw: 'Yaw',
}

export function useStickTraining() {
	const currentExercise = ref(null)
	const completed = ref(false)
	const round = ref(0)

	const waitingForStartCenter = ref(false)
	const waitingForCenter = ref(false)
	const waitingForNextRound = ref(false)

	const errorType = ref(null)
	const errorMessage = ref('')

	/*
	 * 0～1
	 *
	 * 代表目前已經在成功區內
	 * 維持了多少比例。
	 */
	const successHoldProgress = ref(0)

	let nextTimer = null
	let previousExerciseId = null

	/*
	 * performance.now() 的開始時間。
	 * null 表示目前尚未進入成功區。
	 */
	let successHoldStartedAt = null

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
			available[
				Math.floor(
					Math.random()
					* available.length,
				)
				]

		previousExerciseId = exercise.id

		currentExercise.value = {
			...exercise,
			currentValue: 0,
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

		completed.value = false

		waitingForStartCenter.value = true
		waitingForCenter.value = false
		waitingForNextRound.value = false

		clearError()
		resetSuccessHold()
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
				waitingForCenter.value = false

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
		 *
		 * 例如：
		 *
		 * YAW RIGHT
		 * raw = -0.30
		 * direction = -1
		 *
		 * directionalValue = 0.30
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
		 * 超過成功區上限。
		 */
		if (
			directionalValue
			> SUCCESS_MAX
		) {
			resetSuccessHold()

			errorType.value =
				'over-input'

			errorMessage.value =
				'操作過量，請減少推桿幅度'

			return
		}

		/*
		 * 還沒進入成功區。
		 */
		if (
			directionalValue
			< SUCCESS_MIN
		) {
			resetSuccessHold()
			clearError()

			return
		}

		/*
		 * 已經進入成功區：
		 *
		 * SUCCESS_MIN
		 * ≤ directionalValue
		 * ≤ SUCCESS_MAX
		 *
		 * 從這裡開始計算停留時間。
		 */
		clearError()

		const now = performance.now()

		/*
		 * 第一次進入成功區。
		 */
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
		 * 還沒有在成功區維持滿 500ms。
		 */
		if (
			heldDuration
			< SUCCESS_HOLD_DURATION
		) {
			return
		}

		/*
		 * 已連續保持成功區 500ms。
		 */
		successHoldProgress.value = 1

		completed.value = true
		waitingForCenter.value = true

		clearError()
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

		successMin: SUCCESS_MIN,
		successMax: SUCCESS_MAX,
		successHoldProgress,

		start,
		stop,
		update,
	}
}