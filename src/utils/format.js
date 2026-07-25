export function formatTime(seconds) {
  const whole = Math.floor(seconds)
  const minutes = Math.floor(whole / 60)
  const remaining = whole % 60
  return `${String(minutes).padStart(2, '0')}:${String(remaining).padStart(2, '0')}`
}
