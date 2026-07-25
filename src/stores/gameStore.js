import { computed, reactive, ref } from 'vue'

const paused = ref(false)
const telemetry = reactive({
  altitude: 1.5,
  speed: 0,
  yaw: 0,
  distance: 0,
  score: 0,
  time: 0,
  boundaryCount: 0,
  outside: false,
  windSpeed: 0,
  windDirection: 0,
})

const statusText = computed(() => {
  if (paused.value) return '已暫停'
  if (telemetry.outside) return '超出範圍'
  if (telemetry.distance < 1.2) return '中心穩定'
  return '修正漂移'
})

export function useGameStore() {
  return { paused, telemetry, statusText }
}
