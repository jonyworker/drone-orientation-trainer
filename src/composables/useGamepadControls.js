import {
	onBeforeUnmount,
	onMounted,
	reactive,
	ref,
} from 'vue'

import { useControllerCalibration } from '@/composables/useControllerCalibration.js'

/*
 * 目前 BETAFPV LiteRadio 2 SIM 的實測 Mapping
 *
 * AXIS 0 → Roll
 * AXIS 1 → Pitch
 * AXIS 2 → Throttle
 * AXIS 3 → Yaw
 *
 * 這裡只負責：
 * 「哪一個實體 Axis 對應哪個飛行控制」
 *
 * Axis 的：
 *
 * - Min
 * - Center
 * - Max
 * - Deadzone
 *
 * 則交給 useControllerCalibration 處理。
 */
const LITERADIO_MAPPING = {
	roll: 0,
	pitch: 1,
	throttle: 2,
	yaw: 3,
}

export function useGamepadControls() {
	const connected = ref(false)
	const gamepadId = ref('')
	const gamepadIndex = ref(null)

	/*
	 * 所有 Gamepad 原始數值都會先經過：
	 *
	 * useControllerCalibration
	 *
	 * 再提供給遊戲。
	 */
	const {
		normalizeAxis,
	} = useControllerCalibration()

	/*
	 * DronePhysics / GameCanvas
	 * 最後收到的統一格式：
	 *
	 * Roll
	 * -1 ~ +1
	 *
	 * Pitch
	 * -1 ~ +1
	 *
	 * Yaw
	 * -1 ~ +1
	 *
	 * Throttle
	 * 0 ~ 1
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
		 * 否則尋找第一支至少有 4 個 Axis
		 * 的控制器。
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
		 * ------------------------------------------------
		 * ROLL
		 * ------------------------------------------------
		 *
		 * LiteRadio AXIS 0
		 *
		 * - = 左
		 * + = 右
		 *
		 * Raw Gamepad
		 *      ↓
		 * Calibration
		 *      ↓
		 * -1 ~ +1
		 */
		input.roll =
			normalizeAxis(
				'roll',
				gamepad.axes[
					LITERADIO_MAPPING.roll
					],
			)

		/*
		 * ------------------------------------------------
		 * PITCH
		 * ------------------------------------------------
		 *
		 * LiteRadio AXIS 1
		 *
		 * - = 後
		 * + = 前
		 */
		input.pitch =
			normalizeAxis(
				'pitch',
				gamepad.axes[
					LITERADIO_MAPPING.pitch
					],
			)

		/*
		 * ------------------------------------------------
		 * YAW
		 * ------------------------------------------------
		 *
		 * LiteRadio AXIS 3
		 *
		 * 瀏覽器回傳的方向，
		 * 和目前模擬器使用的 Yaw 方向相反。
		 *
		 * 因此：
		 *
		 * 先校正 Raw Axis，
		 * 再反轉輸出。
		 *
		 * 注意：
		 * 這個負號不能移除。
		 */
		input.yaw =
			-normalizeAxis(
				'yaw',
				gamepad.axes[
					LITERADIO_MAPPING.yaw
					],
			)

		/*
		 * ------------------------------------------------
		 * THROTTLE
		 * ------------------------------------------------
		 *
		 * LiteRadio AXIS 2
		 *
		 * 實體 Throttle 不回中。
		 *
		 * Calibration 會將：
		 *
		 * 實際最低點 → 0
		 * 實際最高點 → 1
		 *
		 * 因此這裡不再需要：
		 *
		 * (rawThrottle + 1) / 2
		 */
		input.throttle =
			normalizeAxis(
				'throttle',
				gamepad.axes[
					LITERADIO_MAPPING.throttle
					],
			)
	}

	function update() {
		readGamepad()

		animationFrame =
			requestAnimationFrame(update)
	}

	function handleConnected(event) {
		/*
		 * 先記錄裝置。
		 *
		 * 下一個 animation frame
		 * 就會開始讀取。
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