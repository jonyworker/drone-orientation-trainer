import { onBeforeUnmount, onMounted, reactive } from 'vue'

const KEY_BINDINGS = {
  KeyW: ['throttle', 1],
  KeyS: ['throttle', -1],
  KeyA: ['yaw', 1],
  KeyD: ['yaw', -1],
  ArrowUp: ['pitch', 1],
  ArrowDown: ['pitch', -1],
  ArrowLeft: ['roll', -1],
  ArrowRight: ['roll', 1],
}

export function useKeyboardControls({ onPause, onReset, onHelp }) {
  const input = reactive({
    throttle: 0.5,
    yaw: 0,
    pitch: 0,
    roll: 0,
  })

  const pressed = new Set()

  function rebuildInput() {
    input.throttle = 0.5
    input.yaw = 0
    input.pitch = 0
    input.roll = 0

    for (const code of pressed) {
      const binding = KEY_BINDINGS[code]
      if (!binding) continue

      const [axis, value] = binding

      if (axis === 'throttle') {
        /*
				 * 鍵盤只是暫時模擬油門。
				 *
				 * W = 高油門
				 * S = 低油門
				 * 都沒按 = 50% 懸停附近
				 */
        input.throttle =
          value > 0
            ? 1
            : 0

        continue
      }

      input[axis] += value
    }

    input.yaw =
      Math.max(-1, Math.min(1, input.yaw))

    input.pitch =
      Math.max(-1, Math.min(1, input.pitch))

    input.roll =
      Math.max(-1, Math.min(1, input.roll))
  }

  function handleKeyDown(event) {
    if (KEY_BINDINGS[event.code]) {
      event.preventDefault()
      pressed.add(event.code)
      rebuildInput()
      return
    }

    if (event.repeat) return

    if (event.code === 'Space') {
      event.preventDefault()
      onPause?.()
    } else if (event.code === 'KeyR') {
      onReset?.()
    } else if (event.code === 'KeyH') {
      onHelp?.()
    }
  }

  function handleKeyUp(event) {
    if (!KEY_BINDINGS[event.code]) return
    event.preventDefault()
    pressed.delete(event.code)
    rebuildInput()
  }

  function clearInput() {
    pressed.clear()
    rebuildInput()
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown, { passive: false })
    window.addEventListener('keyup', handleKeyUp, { passive: false })
    window.addEventListener('blur', clearInput)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('keyup', handleKeyUp)
    window.removeEventListener('blur', clearInput)
  })

  return { input, clearInput }
}
