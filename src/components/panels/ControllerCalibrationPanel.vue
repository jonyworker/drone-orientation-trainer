<script setup>
import {
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'
import { useControllerCalibration } from '@/composables/useControllerCalibration.js'

const emit = defineEmits(['close'])

const {
  calibration,
  setCalibration,
} = useControllerCalibration()

const saved = ref(false)

const step = ref(1)

const connected = ref(false)
const gamepadId = ref('')

const raw = ref({
  roll: 0,
  pitch: 0,
  throttle: 0,
  yaw: 0,
})

const centers = ref({
  roll: null,
  pitch: null,
  yaw: null,
})

const ranges = ref({
  roll: {
    min: null,
    max: null,
  },
  pitch: {
    min: null,
    max: null,
  },
  throttle: {
    min: null,
    max: null,
  },
  yaw: {
    min: null,
    max: null,
  },
})

let animationFrame = null

function formatValue(value) {
  if (value === null || value === undefined) {
    return '----'
  }

  return Number(value).toFixed(4)
}

function findGamepad() {
  const gamepads =
    navigator.getGamepads?.() ?? []

  return (
    Array
      .from(gamepads)
      .find(
        gamepad =>
          gamepad
          && gamepad.axes.length >= 4,
      )
    ?? null
  )
}

function updateRange(
  axisName,
  value,
) {
  const axis =
    ranges.value[axisName]

  if (axis.min === null) {
    axis.min = value
  }

  if (axis.max === null) {
    axis.max = value
  }

  axis.min =
    Math.min(
      axis.min,
      value,
    )

  axis.max =
    Math.max(
      axis.max,
      value,
    )
}

function readGamepad() {
  const gamepad = findGamepad()

  if (!gamepad) {
    connected.value = false
    gamepadId.value = ''

    animationFrame =
      requestAnimationFrame(readGamepad)

    return
  }

  connected.value = true
  gamepadId.value = gamepad.id

  const nextRaw = {
    roll:
      gamepad.axes[0] ?? 0,

    pitch:
      gamepad.axes[1] ?? 0,

    throttle:
      gamepad.axes[2] ?? 0,

    yaw:
      gamepad.axes[3] ?? 0,
  }

  raw.value = nextRaw

  /*
   * STEP 2 開始後，
   * 每一個 animation frame
   * 都持續記錄曾經到過的
   * Min / Max。
   */
  if (step.value === 2) {
    updateRange(
      'roll',
      nextRaw.roll,
    )

    updateRange(
      'pitch',
      nextRaw.pitch,
    )

    updateRange(
      'throttle',
      nextRaw.throttle,
    )

    updateRange(
      'yaw',
      nextRaw.yaw,
    )
  }

  animationFrame =
    requestAnimationFrame(readGamepad)
}

function captureCenter() {
  centers.value = {
    roll: raw.value.roll,
    pitch: raw.value.pitch,
    yaw: raw.value.yaw,
  }

  resetRanges()

  step.value = 2
}

function resetRanges() {
  ranges.value = {
    roll: {
      min: null,
      max: null,
    },
    pitch: {
      min: null,
      max: null,
    },
    throttle: {
      min: null,
      max: null,
    },
    yaw: {
      min: null,
      max: null,
    },
  }
}

function backToStep1() {
  step.value = 1
}

function finishRangeCapture() {
  step.value = 3
}

function backToStep2() {
  resetRanges()
  step.value = 2
}

function axisProgress(
  min,
  max,
) {
  if (
    min === null
    || max === null
  ) {
    return 0
  }

  const range =
    Math.abs(max - min)

  return Math.min(
    100,
    range / 2 * 100,
  )
}

function axisReady(
  min,
  max,
) {
  if (
    min === null
    || max === null
  ) {
    return false
  }

  /*
   * 理想範圍接近 2：
   *
   * -1 → +1
   *
   * 第一版先要求至少量到 1.6，
   * 避免使用者完全沒推到底就完成。
   */
  return (
    Math.abs(max - min)
    >= 1.6
  )
}

function saveCalibration() {
  setCalibration({
    deadzone: 0.03,

    axes: {
      roll: {
        min: ranges.value.roll.min,
        center: centers.value.roll,
        max: ranges.value.roll.max,
      },

      pitch: {
        min: ranges.value.pitch.min,
        center: centers.value.pitch,
        max: ranges.value.pitch.max,
      },

      yaw: {
        min: ranges.value.yaw.min,
        center: centers.value.yaw,
        max: ranges.value.yaw.max,
      },

      throttle: {
        min: ranges.value.throttle.min,
        max: ranges.value.throttle.max,
      },
    },
  })

  saved.value = true
}

const allRangesReady = () =>
  axisReady(
    ranges.value.roll.min,
    ranges.value.roll.max,
  )
  && axisReady(
    ranges.value.pitch.min,
    ranges.value.pitch.max,
  )
  && axisReady(
    ranges.value.yaw.min,
    ranges.value.yaw.max,
  )
  && axisReady(
    ranges.value.throttle.min,
    ranges.value.throttle.max,
  )

onMounted(() => {
  animationFrame =
    requestAnimationFrame(readGamepad)
})

onBeforeUnmount(() => {
  if (animationFrame !== null) {
    cancelAnimationFrame(
      animationFrame,
    )
  }
})
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
    @click.self="emit('close')"
  >
    <section
      class="flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-lime-300/20 bg-[#11151c] shadow-2xl shadow-black/60"
    >
      <!-- Header -->
      <header
        class="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-6 py-5"
      >
        <div>
          <div class="flex items-center gap-2">
            <span
              class="h-2.5 w-2.5 rounded-full"
              :class="
                connected
                  ? 'bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,.7)]'
                  : 'bg-white/25'
              "
            />

            <p class="text-sm font-semibold text-lime-100">
              Controller Calibration
            </p>

            <span
              class="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45"
            >
              v0.1
            </span>
          </div>

          <p class="mt-1 text-xs text-white/45">
            校正控制器中立點與操作範圍
          </p>
        </div>

        <button
          type="button"
          class="rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-xs text-white/55 hover:bg-white/10 hover:text-white"
          @click="emit('close')"
        >
          關閉
        </button>
      </header>

      <div
        class="min-h-0 flex-1 overflow-y-auto p-6"
      >
        <!-- 未連線 -->
        <div
          v-if="!connected"
          class="rounded-2xl border border-amber-200/15 bg-amber-200/5.5 p-5 text-sm leading-6 text-amber-50/70"
        >
          尚未偵測到控制器。

          請插上 LiteRadio 2 SIM，
          並輕微移動搖桿，
          讓瀏覽器取得 Gamepad 資料。
        </div>

        <template v-else>
          <!-- STEP 1 -->
          <template v-if="step === 1">
            <div class="text-center">
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-lime-200/60"
              >
                STEP 1 / 3
              </p>

              <h2
                class="mt-3 text-2xl font-semibold text-white"
              >
                中立點校正
              </h2>

              <p
                class="mx-auto mt-3 max-w-md text-sm leading-6 text-white/55"
              >
                完全放開右搖桿，
                並讓左搖桿的 Yaw 自動回到中央。
                保持控制器不動後，再記錄中立點。
              </p>
            </div>

            <div
              class="mt-6 grid gap-3 sm:grid-cols-3"
            >
              <div
                class="rounded-2xl border border-white/10 bg-black/20 p-4 text-center"
              >
                <p
                  class="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"
                >
                  Roll
                </p>

                <p
                  class="mt-2 font-mono text-xl font-semibold tabular-nums text-sky-100"
                >
                  {{ formatValue(raw.roll) }}
                </p>

                <p
                  class="mt-1 text-[11px] text-white/35"
                >
                  AXIS 0
                </p>
              </div>

              <div
                class="rounded-2xl border border-white/10 bg-black/20 p-4 text-center"
              >
                <p
                  class="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"
                >
                  Pitch
                </p>

                <p
                  class="mt-2 font-mono text-xl font-semibold tabular-nums text-sky-100"
                >
                  {{ formatValue(raw.pitch) }}
                </p>

                <p
                  class="mt-1 text-[11px] text-white/35"
                >
                  AXIS 1
                </p>
              </div>

              <div
                class="rounded-2xl border border-white/10 bg-black/20 p-4 text-center"
              >
                <p
                  class="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"
                >
                  Yaw
                </p>

                <p
                  class="mt-2 font-mono text-xl font-semibold tabular-nums text-sky-100"
                >
                  {{ formatValue(raw.yaw) }}
                </p>

                <p
                  class="mt-1 text-[11px] text-white/35"
                >
                  AXIS 3
                </p>
              </div>
            </div>

            <div
              class="mt-5 rounded-2xl border border-sky-300/15 bg-sky-300/4.5 p-4 text-sm leading-6 text-sky-50/65"
            >
              這裡顯示的是控制器原始數值。
              中立位置不一定剛好是
              <span
                class="font-mono text-sky-100"
              >
                0.0000
              </span>。
            </div>

            <button
              type="button"
              class="mt-6 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200"
              @click="captureCenter"
            >
              記錄中立點
            </button>
          </template>

          <!-- STEP 2 -->
          <template
            v-else-if="step === 2"
          >
            <div class="text-center">
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-lime-200/60"
              >
                STEP 2 / 3
              </p>

              <h2
                class="mt-3 text-2xl font-semibold text-white"
              >
                操作範圍校正
              </h2>

              <p
                class="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/55"
              >
                將左右兩支搖桿完整推到所有方向的極限。
                系統會持續記錄每個軸曾經到過的最小值與最大值。
              </p>
            </div>

            <div
              class="mt-5 rounded-2xl border border-lime-300/15 bg-lime-300/4 p-4 text-sm leading-6 text-lime-50/70"
            >
              建議將右搖桿沿著外圈完整繞一圈，
              再把左搖桿的 Yaw 左右推到底，
              Throttle 則從最低推到最高一次。
            </div>

            <div
              class="mt-6 space-y-3"
            >
              <article
                v-for="axisName in [
                  'roll',
                  'pitch',
                  'yaw',
                  'throttle',
                ]"
                :key="axisName"
                class="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div
                  class="flex items-center justify-between gap-4"
                >
                  <div>
                    <p
                      class="text-sm font-semibold capitalize text-white/80"
                    >
                      {{ axisName }}
                    </p>

                    <p
                      class="mt-1 font-mono text-xs text-sky-100"
                    >
                      RAW
                      {{ formatValue(raw[axisName]) }}
                    </p>
                  </div>

                  <span
                    class="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"
                    :class="
                      axisReady(
                        ranges[axisName].min,
                        ranges[axisName].max,
                      )
                        ? 'bg-lime-300/15 text-lime-200'
                        : 'bg-white/5 text-white/35'
                    "
                  >
                    {{
                      axisReady(
                        ranges[axisName].min,
                        ranges[axisName].max,
                      )
                        ? 'READY'
                        : 'MOVE'
                    }}
                  </span>
                </div>

                <!-- Progress -->
                <div
                  class="mt-4 h-2 overflow-hidden rounded-full bg-white/10"
                >
                  <div
                    class="h-full rounded-full bg-lime-300/70 transition-[width] duration-100"
                    :style="{
                      width: `${
                        axisProgress(
                          ranges[axisName].min,
                          ranges[axisName].max,
                        )
                      }%`,
                    }"
                  />
                </div>

                <div
                  class="mt-3 grid grid-cols-2 gap-3 text-xs"
                >
                  <div>
                    <p class="text-white/35">
                      MIN
                    </p>

                    <p
                      class="mt-1 font-mono tabular-nums text-white/75"
                    >
                      {{
                        formatValue(
                          ranges[axisName].min,
                        )
                      }}
                    </p>
                  </div>

                  <div class="text-right">
                    <p class="text-white/35">
                      MAX
                    </p>

                    <p
                      class="mt-1 font-mono tabular-nums text-white/75"
                    >
                      {{
                        formatValue(
                          ranges[axisName].max,
                        )
                      }}
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div
              class="mt-6 flex gap-3"
            >
              <button
                type="button"
                class="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/65 hover:bg-white/10"
                @click="backToStep1"
              >
                上一步
              </button>

              <button
                type="button"
                class="flex-2 rounded-2xl px-5 py-3 text-sm font-semibold transition"
                :class="
                  allRangesReady()
                    ? 'bg-lime-300 text-slate-950 hover:bg-lime-200'
                    : 'cursor-not-allowed bg-white/5 text-white/25'
                "
                :disabled="!allRangesReady()"
                @click="finishRangeCapture"
              >
                完成範圍校正
              </button>
            </div>
          </template>

          <!-- STEP 3 -->
          <template
            v-else-if="step === 3"
          >
            <div class="text-center">
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-lime-200/60"
              >
                STEP 3 / 3
              </p>

              <div
                class="mx-auto mt-4 grid h-14 w-14 place-items-center rounded-full bg-lime-300/15 text-2xl text-lime-200"
              >
                ✓
              </div>

              <h2
                class="mt-4 text-2xl font-semibold text-white"
              >
                確認校正結果
              </h2>

              <p
                class="mx-auto mt-3 max-w-md text-sm leading-6 text-white/55"
              >
                請確認中立點與操作範圍是否正常。
                儲存後，系統會將這組資料套用到飛行控制。
              </p>
            </div>

            <!-- Center -->
            <div
              class="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.18em] text-white/40"
              >
                Center
              </p>

              <div
                class="mt-3 grid grid-cols-3 gap-3"
              >
                <div>
                  <p class="text-xs text-white/35">
                    Roll
                  </p>

                  <p
                    class="mt-1 font-mono text-sm text-lime-100"
                  >
                    {{ formatValue(centers.roll) }}
                  </p>
                </div>

                <div>
                  <p class="text-xs text-white/35">
                    Pitch
                  </p>

                  <p
                    class="mt-1 font-mono text-sm text-lime-100"
                  >
                    {{ formatValue(centers.pitch) }}
                  </p>
                </div>

                <div>
                  <p class="text-xs text-white/35">
                    Yaw
                  </p>

                  <p
                    class="mt-1 font-mono text-sm text-lime-100"
                  >
                    {{ formatValue(centers.yaw) }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Ranges -->
            <div
              class="mt-3 rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.18em] text-white/40"
              >
                Range
              </p>

              <div
                class="mt-3 space-y-2"
              >
                <div
                  v-for="axisName in [
                    'roll',
                    'pitch',
                    'yaw',
                    'throttle',
                  ]"
                  :key="axisName"
                  class="grid grid-cols-[1fr_auto_auto] items-center gap-4 text-xs"
                >
                  <p
                    class="capitalize text-white/55"
                  >
                    {{ axisName }}
                  </p>

                  <p
                    class="font-mono tabular-nums text-white/70"
                  >
                    {{
                      formatValue(
                        ranges[axisName].min,
                      )
                    }}
                  </p>

                  <p
                    class="font-mono tabular-nums text-white/70"
                  >
                    {{
                      formatValue(
                        ranges[axisName].max,
                      )
                    }}
                  </p>
                </div>
              </div>
            </div>

            <div
              v-if="!saved"
              class="mt-6 flex gap-3"
            >
              <button
                type="button"
                class="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/65 hover:bg-white/10"
                @click="backToStep2"
              >
                重新測量
              </button>

              <button
                type="button"
                class="flex-2 rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200"
                @click="saveCalibration"
              >
                儲存校正
              </button>
            </div>

            <div
              v-else
              class="mt-6 rounded-2xl border border-lime-300/20 bg-lime-300/6 p-5 text-center"
            >
              <div
                class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-lime-300/15 text-xl text-lime-200"
              >
                ✓
              </div>

              <p class="mt-3 font-semibold text-lime-100">
                控制器校正完成
              </p>

              <p class="mt-2 text-sm leading-6 text-white/50">
                校正資料已儲存，之後的飛行控制會自動使用這組設定。
              </p>

              <button
                type="button"
                class="mt-5 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-lime-200"
                @click="emit('close')"
              >
                完成
              </button>
            </div>
          </template>
        </template>
      </div>
    </section>
  </div>
</template>