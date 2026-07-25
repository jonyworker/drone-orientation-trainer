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
    throttle: 0,
    yaw: 0,
    pitch: 0,
    roll: 0,
  })

  const pressed = new Set()

  function rebuildInput() {
    input.throttle = 0
    input.yaw = 0
    input.pitch = 0
    input.roll = 0

    for (const code of pressed) {
      const binding = KEY_BINDINGS[code]
      if (!binding) continue
      const [axis, value] = binding
      input[axis] += value
    }

    for (const axis of Object.keys(input)) {
      input[axis] = Math.max(-1, Math.min(1, input[axis]))
    }
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
