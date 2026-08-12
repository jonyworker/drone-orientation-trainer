import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'

function createAxisStat(value = 0) {
  return {
    current: value,
    min: value,
    max: value,
    baseline: value,
  }
}

export function useGamepadDiagnostics() {
  const supported = typeof navigator !== 'undefined' && 'getGamepads' in navigator
  const connected = ref(false)
  const gamepadIndex = ref(null)
  const gamepadId = ref('')
  const mapping = ref('')
  const timestamp = ref(0)
  const axes = reactive([])
  const buttons = reactive([])

  let frameId = 0

  const axisCount = computed(() => axes.length)
  const buttonCount = computed(() => buttons.length)

  function ensureAxisStats(gamepad) {
    while (axes.length < gamepad.axes.length) {
      const value = gamepad.axes[axes.length] ?? 0
      axes.push(createAxisStat(value))
    }

    if (axes.length > gamepad.axes.length) {
      axes.splice(gamepad.axes.length)
    }
  }

  function updateFromGamepad(gamepad) {
    connected.value = true
    gamepadIndex.value = gamepad.index
    gamepadId.value = gamepad.id || 'Unknown gamepad'
    mapping.value = gamepad.mapping || 'none'
    timestamp.value = gamepad.timestamp || 0

    ensureAxisStats(gamepad)

    gamepad.axes.forEach((value, index) => {
      const stat = axes[index]
      stat.current = value
      stat.min = Math.min(stat.min, value)
      stat.max = Math.max(stat.max, value)
    })

    buttons.splice(
      0,
      buttons.length,
      ...gamepad.buttons.map((button, index) => ({
        index,
        value: button.value,
        pressed: button.pressed,
        touched: button.touched,
      })),
    )
  }

  function findGamepad() {
    if (!supported) return null

    const gamepads = navigator.getGamepads?.() ?? []

    if (gamepadIndex.value != null && gamepads[gamepadIndex.value]) {
      return gamepads[gamepadIndex.value]
    }

    return Array.from(gamepads).find(Boolean) ?? null
  }

  function poll() {
    const gamepad = findGamepad()

    if (gamepad) {
      updateFromGamepad(gamepad)
    } else {
      connected.value = false
      gamepadIndex.value = null
    }

    frameId = requestAnimationFrame(poll)
  }

  function handleConnected(event) {
    gamepadIndex.value = event.gamepad.index
    updateFromGamepad(event.gamepad)
  }

  function handleDisconnected(event) {
    if (gamepadIndex.value === event.gamepad.index) {
      connected.value = false
      gamepadIndex.value = null
    }
  }

  function resetRange() {
    axes.forEach((axis) => {
      axis.min = axis.current
      axis.max = axis.current
    })
  }

  function captureBaseline() {
    axes.forEach((axis) => {
      axis.baseline = axis.current
    })
  }

  onMounted(() => {
    if (!supported) return

    window.addEventListener('gamepadconnected', handleConnected)
    window.addEventListener('gamepaddisconnected', handleDisconnected)
    poll()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('gamepadconnected', handleConnected)
    window.removeEventListener('gamepaddisconnected', handleDisconnected)
    cancelAnimationFrame(frameId)
  })

  return {
    supported,
    connected,
    gamepadIndex,
    gamepadId,
    mapping,
    timestamp,
    axes,
    buttons,
    axisCount,
    buttonCount,
    resetRange,
    captureBaseline,
  }
}
