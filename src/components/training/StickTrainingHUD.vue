<script setup>
import {
  computed,
} from 'vue'

const props = defineProps({
  exercise: {
    type: Object,
    default: null,
  },

  completed: {
    type: Boolean,
    default: false,
  },

  round: {
    type: Number,
    default: 0,
  },

  errorType: {
    type: String,
    default: null,
  },

  errorMessage: {
    type: String,
    default: '',
  },

  waitingForCenter: {
    type: Boolean,
    default: false,
  },

  waitingForStartCenter: {
    type: Boolean,
    default: false,
  },

  waitingForNextRound: {
    type: Boolean,
    default: false,
  },

  successMin: {
    type: Number,
    default: 0.4,
  },

  successMax: {
    type: Number,
    default: 0.6,
  },

  successHoldProgress: {
    type: Number,
    default: 0,
  },
})

/*
 * 將目前 Axis 數值轉換成
 * 指定方向的 0～1 操作幅度。
 */
const directionalProgress =
  computed(() => {
    if (!props.exercise) {
      return 0
    }

    const value =
      Number(
        props.exercise.currentValue
        ?? 0,
      )

    const direction =
      Number(
        props.exercise.direction
        ?? 1,
      )

    return Math.max(
      0,
      Math.min(
        1,
        value * direction,
      ),
    )
  })

const progressPercent =
  computed(() =>
    Math.round(
      directionalProgress.value
      * 100,
    ),
  )

const successMinPercent =
  computed(() =>
    Math.round(
      props.successMin * 100,
    ),
  )

const successMaxPercent =
  computed(() =>
    Math.round(
      props.successMax * 100,
    ),
  )

const successZoneWidth =
  computed(() =>
    Math.max(
      0,
      (
        props.successMax
        - props.successMin
      ) * 100,
    ),
  )

const inSuccessZone =
  computed(() =>
    directionalProgress.value
    >= props.successMin
    &&
    directionalProgress.value
    <= props.successMax,
  )

/*
 * Hold 動畫只填滿成功區本身。
 */
const holdZoneWidth =
  computed(() =>
      successZoneWidth.value
      * Math.max(
        0,
        Math.min(
          1,
          props.successHoldProgress,
        ),
      ),
  )

/*
 * 游標顏色狀態。
 *
 * errorType 保留在訓練邏輯中，
 * HUD 不顯示錯誤文字，只用紅點回饋。
 */
const cursorState =
  computed(() => {
    if (props.errorType) {
      return 'error'
    }

    if (
      props.completed
      || props.waitingForCenter
      || inSuccessZone.value
    ) {
      return 'success'
    }

    return 'normal'
  })
</script>

<template>
  <div
    v-if="
      exercise
      || waitingForStartCenter
      || waitingForNextRound
    "
    class="pointer-events-none absolute bottom-6 left-1/2 z-30 w-[min(90vw,600px)] -translate-x-1/2"
  >
    <section
      class="rounded-2xl border border-white/10 bg-black/75 px-6 py-4 shadow-2xl backdrop-blur-md"
    >
      <!-- 訓練開始前 -->
      <div
        v-if="waitingForStartCenter"
        class="flex h-20 items-center justify-center"
      >
        <div
          class="flex items-center gap-3 text-sky-200"
        >
          <span class="text-xl">
            ◎
          </span>

          <span
            class="text-sm font-semibold"
          >
            請將搖桿回到中心
          </span>
        </div>
      </div>

      <!-- 等待下一題 -->
      <div
        v-else-if="
          waitingForNextRound
          && !exercise
        "
        class="flex h-20 items-center justify-center"
      >
        <div
          class="flex items-center gap-3 text-lime-200"
        >
          <span class="text-lg">
            ✓
          </span>

          <span
            class="text-sm font-semibold"
          >
            準備下一題
          </span>
        </div>
      </div>

      <!-- 正式題目 -->
      <template v-else-if="exercise">
        <!-- 指令 -->
        <div
          class="flex items-center justify-center gap-3"
        >
          <h2
            class="text-xl font-black tracking-[0.08em] text-white"
          >
            {{ exercise.title }}
          </h2>
        </div>

        <!-- 控制尺 -->
        <div class="mt-5">
          <div
            class="relative h-7"
          >
            <!-- 基礎軌道 -->
            <div
              class="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/10"
            />

            <!-- 成功區底色 -->
            <div
              class="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-lime-300/20"
              :class="
                inSuccessZone
                  ? 'shadow-[0_0_14px_rgba(190,242,100,0.22)]'
                  : ''
              "
              :style="{
                left:
                  `${successMinPercent}%`,
                width:
                  `${successZoneWidth}%`,
              }"
            />

            <!-- Hold 填充 -->
            <div
              class="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-lime-300 transition-[width] duration-75"
              :style="{
                left:
                  `${successMinPercent}%`,
                width:
                  `${holdZoneWidth}%`,
              }"
            />

            <!-- 成功區左界 -->
            <div
              class="absolute top-1/2 h-5 w-px -translate-y-1/2 bg-lime-300/70"
              :style="{
                left:
                  `${successMinPercent}%`,
              }"
            />

            <!-- 成功區右界 -->
            <div
              class="absolute top-1/2 h-5 w-px -translate-y-1/2 bg-lime-300/70"
              :style="{
                left:
                  `${successMaxPercent}%`,
              }"
            />

            <!-- 即時輸入游標 -->
            <div
              class="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black transition-[left,background-color,box-shadow] duration-75"
              :class="{
                'bg-white':
                  cursorState === 'normal',

                'bg-lime-300 shadow-[0_0_14px_rgba(190,242,100,0.75)]':
                  cursorState === 'success',

                'bg-red-300 shadow-[0_0_12px_rgba(252,165,165,0.65)]':
                  cursorState === 'error',
              }"
              :style="{
                left:
                  `${progressPercent}%`,
              }"
            />
          </div>

          <!-- 刻度 -->
          <div
            class="relative mt-1 h-4 font-mono text-[9px] tabular-nums text-white/25"
          >
            <span
              class="absolute left-0"
            >
              0%
            </span>

            <span
              class="absolute -translate-x-1/2 text-lime-200/65"
              :style="{
                left:
                  `${successMinPercent}%`,
              }"
            >
              {{ successMinPercent }}%
            </span>

            <span
              class="absolute -translate-x-1/2 text-lime-200/65"
              :style="{
                left:
                  `${successMaxPercent}%`,
              }"
            >
              {{ successMaxPercent }}%
            </span>

            <span
              class="absolute right-0"
            >
              100%
            </span>
          </div>
        </div>
      </template>
    </section>
  </div>
</template>