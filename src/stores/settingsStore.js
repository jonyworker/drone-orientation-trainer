import { reactive } from 'vue'

export const cameraHeightOptions = [
  { value: 'angled', label: '斜俯視', distance: 15, height: 7.5, lookHeight: 1.4 },
  { value: 'eye', label: '平視', distance: 18, height: 1.8, lookHeight: 1.45 },
  { value: 'low', label: '低角度', distance: 17, height: 0.75, lookHeight: 1.65 },
  { value: 'high', label: '高角度俯視', distance: 14, height: 12.5, lookHeight: 1.1 },
]

export const cameraBearingOptions = [
  { value: 'front', label: '正面 0°', degrees: 0 },
  { value: 'diagonal', label: '斜角 45°', degrees: 45 },
  { value: 'right', label: '右側 90°', degrees: 90 },
  { value: 'back', label: '背面 180°', degrees: 180 },
  { value: 'left', label: '左側 −90°', degrees: -90 },
]

export const windOptions = [
  { value: 'none', label: '無風' },
  { value: 'breeze', label: '穩定微風' },
  { value: 'gusty', label: '變向陣風' },
]

export const trainingOptions = [
  {
    value: 'free',
    label: '自由練習',
  },
  {
    value: 'randomHeading',
    label: '方向訓練',
  },
  {
    value: 'stickTraining1',
    label: '搖桿訓練 Lv.1',
  },
  {
    value: 'stickTraining2',
    label: '搖桿訓練 Lv.2',
  },
  {
    value: 'stabilityTraining1',
    label: '穩定控制 Lv.1',
  },
]

const state = reactive({
  cameraHeight: 'angled',
  cameraBearing: 'front',
  windMode: 'none',
  trainingMode: 'free',
  showHeadingArrow: true,
  showHelp: true,
})

export function useSettingsStore() {
  return state
}
