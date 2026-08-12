import {
	onBeforeUnmount,
	onMounted,
	reactive,
	ref,
} from 'vue'

const DEADZONE = 0.02

/*
 * 目前 BETAFPV LiteRadio 2 SIM 的實測 Mapping
 *
 * AXIS 0 → Roll
 * AXIS 1 → Pitch
 * AXIS 2 → Throttle
 * AXIS 3 → Yaw
 *
 * 注意：
 * 這份 Mapping 目前只是 LiteRadio 2 SIM 的設定。
 * 未來會抽成可校正 / 可更換的 Controller Mapping。
 */
const LITERADIO_MAPPING = {
	roll: 0,
	pitch: 1,
	throttle: 2,
	yaw: 3,
}

/*
 * Roll / Pitch / Yaw 使用 Deadzone。
 *
 * 例如：
 *
 * raw = -0.0005
 *
 * 因為落在 ±0.02 內，
 * 最後輸出直接視為 0。
 *
 * 超過 Deadzone 後重新縮放，
 * 避免出現一小段沒有反應的跳躍。
 */
function applyDeadzone(value, deadzone = DEADZONE) {
	const raw = Number(value ?? 0)

	if (Math.abs(raw) <= deadzone) {
		return 0
	}

	const sign = Math.sign(raw)

	return (
		sign
		* (
			(Math.abs(raw) - deadzone)
			/ (1 - deadzone)
		)
	)
}

/*
 * 確保數值永遠在指定範圍。
 */
function clamp(value, min, max) {
	return Math.min(
		max,
		Math.max(min, value),
	)
}

export function useGamepadControls() {
	const connected = ref(false)
	const gamepadId = ref('')
	const gamepadIndex = ref(null)

	/*
	 * 這是之後 DronePhysics 會吃的統一格式。
	 *
	 * Roll / Pitch / Yaw：
	 * -1 ~ +1
	 *
	 * Throttle：
	 * 目前暫時保留 -1 ~ +1。
	 *
	 * 為什麼不現在改成 0 ~ 1？
	 * 因為你目前 DronePhysics 的 throttle
	 * 是用：
	 *
	 * input.throttle * 4.1
	 *
	 * 也就是：
	 * + 值 = 上升
	 * - 值 = 下降
	 *
	 * 我們先保持和既有物理系統完全一致。
	 */
	const input = reactive({
		throttle: 0,
		yaw: 0,
		pitch: 0,
		roll: 0,
	})

	let animationFrame = null

	function clearInput() {
		input.throttle = 0
		input.yaw = 0
		input.pitch = 0
		input.roll = 0
	}

	function findGamepad() {
		const gamepads =
			navigator.getGamepads?.() ?? []

		/*
		 * 如果之前已經找到 Gamepad，
		 * 優先使用同一個 index。
		 */
		if (
			gamepadIndex.value !== null
			&& gamepads[gamepadIndex.value]
		) {
			return gamepads[gamepadIndex.value]
		}

		/*
		 * 否則找第一支至少有 4 個 Axis 的控制器。
		 */
		return (
			Array
				.from(gamepads)
				.find(
					(gamepad) =>
						gamepad
						&& gamepad.axes.length >= 4,
				)
			?? null
		)
	}

	function readGamepad() {
		const gamepad = findGamepad()

		if (!gamepad) {
			connected.value = false
			gamepadId.value = ''
			gamepadIndex.value = null

			clearInput()
			return
		}

		connected.value = true
		gamepadId.value = gamepad.id
		gamepadIndex.value = gamepad.index

		/*
		 * LiteRadio 實測：
		 *
		 * AXIS 0
		 * -1 = 左
		 * +1 = 右
		 */
		input.roll =
			applyDeadzone(
				gamepad.axes[
					LITERADIO_MAPPING.roll
					],
			)

		/*
		 * AXIS 1
		 * -1 = 後
		 * +1 = 前
		 */
		input.pitch =
			applyDeadzone(
				gamepad.axes[
					LITERADIO_MAPPING.pitch
					],
			)

		/*
		 * AXIS 3
		 * -1 = 左轉
		 * +1 = 右轉
		 */
		input.yaw =
			-applyDeadzone(
				gamepad.axes[
					LITERADIO_MAPPING.yaw
					],
			)

		/*
		 * AXIS 2
		 *
		 * -1 = 油門最低
		 * +1 = 油門最高
		 *
		 * Throttle 不回中，
		 * 所以絕對不能套 Deadzone。
		 */
		const rawThrottle =
			clamp(
				Number(
					gamepad.axes[
						LITERADIO_MAPPING.throttle
						] ?? -1,
				),
				-1,
				1,
			)

		input.throttle =
			(rawThrottle + 1) / 2
	}

	function update() {
		readGamepad()

		animationFrame =
			requestAnimationFrame(update)
	}

	function handleConnected(event) {
		/*
		 * 先記錄裝置。
		 * 下一個 animation frame 就會開始讀取。
		 */
		if (
			event.gamepad.axes.length >= 4
		) {
			gamepadIndex.value =
				event.gamepad.index

			gamepadId.value =
				event.gamepad.id

			connected.value = true
		}
	}

	function handleDisconnected(event) {
		if (
			event.gamepad.index
			!== gamepadIndex.value
		) {
			return
		}

		connected.value = false
		gamepadIndex.value = null
		gamepadId.value = ''

		clearInput()
	}

	onMounted(() => {
		window.addEventListener(
			'gamepadconnected',
			handleConnected,
		)

		window.addEventListener(
			'gamepaddisconnected',
			handleDisconnected,
		)

		animationFrame =
			requestAnimationFrame(update)
	})

	onBeforeUnmount(() => {
		window.removeEventListener(
			'gamepadconnected',
			handleConnected,
		)

		window.removeEventListener(
			'gamepaddisconnected',
			handleDisconnected,
		)

		if (animationFrame !== null) {
			cancelAnimationFrame(
				animationFrame,
			)
		}
	})

	return {
		input,
		connected,
		gamepadId,
		gamepadIndex,
		clearInput,
	}
}