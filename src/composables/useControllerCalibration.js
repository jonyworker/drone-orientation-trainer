import {
	reactive,
} from 'vue'

const STORAGE_KEY = 'drone-trainer-controller-calibration'

/*
 * 第一版先針對目前已確認的 LiteRadio 2 SIM Mapping。
 *
 * Roll / Pitch / Yaw：
 * min / center / max
 *
 * Throttle：
 * min / max
 *
 * Deadzone：
 * 中心附近多少範圍視為 0。
 */
const defaultCalibration = {
	version: 1,

	calibrated: false,

	deadzone: 0.03,

	axes: {
		roll: {
			min: -1,
			center: 0,
			max: 1,
		},

		pitch: {
			min: -1,
			center: 0,
			max: 1,
		},

		yaw: {
			min: -1,
			center: 0,
			max: 1,
		},

		throttle: {
			min: -1,
			max: 1,
		},
	},
}

function cloneDefaultCalibration() {
	return JSON.parse(
		JSON.stringify(defaultCalibration),
	)
}

function clamp(value, min, max) {
	return Math.min(
		max,
		Math.max(min, value),
	)
}

/*
 * Roll / Pitch / Yaw 正規化。
 *
 * 不直接假設：
 *
 * center = 0
 * min = -1
 * max = +1
 *
 * 而是使用真正校正得到的數值。
 *
 *
 * 例如：
 *
 * min     = -0.96
 * center  = -0.004
 * max     = 0.98
 *
 * 仍然會轉換成：
 *
 * -1 → 0 → +1
 */
function normalizeCenteredAxis(
	rawValue,
	axisCalibration,
	deadzone,
) {
	const raw =
		Number(rawValue ?? 0)

	const min =
		Number(axisCalibration?.min ?? -1)

	const center =
		Number(axisCalibration?.center ?? 0)

	const max =
		Number(axisCalibration?.max ?? 1)

	let normalized = 0

	/*
	 * Center 左側。
	 */
	if (raw < center) {
		const range =
			center - min

		if (range > 0.0001) {
			normalized =
				-(
					(center - raw)
					/ range
				)
		}
	}

	/*
	 * Center 右側。
	 */
	if (raw > center) {
		const range =
			max - center

		if (range > 0.0001) {
			normalized =
				(
					raw - center
				)
				/ range
		}
	}

	normalized =
		clamp(
			normalized,
			-1,
			1,
		)

	/*
	 * Deadzone。
	 *
	 * 例如 deadzone = 0.03：
	 *
	 * -0.03 ~ +0.03
	 *
	 * 全部視為 0。
	 */
	if (
		Math.abs(normalized)
		<= deadzone
	) {
		return 0
	}

	/*
	 * Deadzone 外重新縮放，
	 * 避免跨過 Deadzone 時突然跳到 3%。
	 *
	 * 例如：
	 *
	 * 0.03 → 0
	 * 0.50 → 約 0.48
	 * 1.00 → 1
	 */
	const sign =
		Math.sign(normalized)

	return clamp(
		sign
		* (
			(
				Math.abs(normalized)
				- deadzone
			)
			/ (
				1 - deadzone
			)
		),
		-1,
		1,
	)
}

/*
 * Throttle 不回中。
 *
 * 所以它只需要：
 *
 * 最低點 → 0
 * 最高點 → 1
 */
function normalizeThrottle(
	rawValue,
	axisCalibration,
) {
	const raw =
		Number(rawValue ?? -1)

	const min =
		Number(axisCalibration?.min ?? -1)

	const max =
		Number(axisCalibration?.max ?? 1)

	const range =
		max - min

	if (range <= 0.0001) {
		return 0
	}

	return clamp(
		(raw - min) / range,
		0,
		1,
	)
}

function loadCalibration() {
	if (
		typeof window === 'undefined'
	) {
		return cloneDefaultCalibration()
	}

	try {
		const raw =
			window.localStorage.getItem(
				STORAGE_KEY,
			)

		if (!raw) {
			return cloneDefaultCalibration()
		}

		const saved =
			JSON.parse(raw)

		return {
			...cloneDefaultCalibration(),
			...saved,

			axes: {
				...cloneDefaultCalibration().axes,
				...(saved.axes ?? {}),
			},
		}
	}
	catch {
		return cloneDefaultCalibration()
	}
}

const calibration =
	reactive(
		loadCalibration(),
	)

export function useControllerCalibration() {
	function save() {
		window.localStorage.setItem(
			STORAGE_KEY,
			JSON.stringify(calibration),
		)
	}

	function reset() {
		const fresh =
			cloneDefaultCalibration()

		Object.assign(
			calibration,
			fresh,
		)

		save()
	}

	function setCalibration(nextCalibration) {
		Object.assign(
			calibration,
			nextCalibration,
		)

		calibration.calibrated = true

		save()
	}

	function normalizeAxis(
		axisName,
		rawValue,
	) {
		if (axisName === 'throttle') {
			return normalizeThrottle(
				rawValue,
				calibration.axes.throttle,
			)
		}

		return normalizeCenteredAxis(
			rawValue,
			calibration.axes[axisName],
			calibration.deadzone,
		)
	}

	return {
		calibration,

		normalizeAxis,

		save,
		reset,
		setCalibration,
	}
}