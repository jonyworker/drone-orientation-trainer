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
 * 將目前 Axis 數值轉換成：
 *
 * 0 = 沒有往指定方向操作
 * 1 = 指定方向推到底
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

/*
 * 是否正在成功區內。
 */
const inSuccessZone =
  computed(() =>
    directionalProgress.value
    >= props.successMin
    &&
    directionalProgress.value
    <= props.successMax,
  )

const holdPercent =
  computed(() =>
    Math.round(
      Math.max(
        0,
        Math.min(
          1,
          props.successHoldProgress,
        ),
      ) * 100,
    ),
  )

/*
 * Hold 的填滿寬度只存在成功區內。
 *
 * 例如成功區寬 20%，
 * Hold 50% 時就填入其中 10%。
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
</script>

<template>
  <div
    v-if="
      exercise
      || waitingForStartCenter
      || waitingForNextRound
    "
    class="pointer-events-none absolute left-1/2 top-4 z-30 w-[min(92vw,680px)] -translate-x-1/2"
  >
    <section
      class="rounded-2xl border border-white/10 bg-black/75 px-5 py-4 shadow-2xl backdrop-blur-md"
    >
      <!-- 開始前 -->
      <div
        v-if="waitingForStartCenter"
        class="flex items-center gap-4"
      >
        <div
          class="grid size-11 shrink-0 place-items-center rounded-full border border-sky-300/20 bg-sky-300/10"
        >
          <span class="text-lg text-sky-200">
            ◎
          </span>
        </div>

        <div class="min-w-0 flex-1">
          <p
            class="text-[9px] uppercase tracking-[0.18em] text-white/35"
          >
            Stick Training · Level 1
          </p>

          <h2
            class="mt-1 text-base font-semibold text-white"
          >
            請先將搖桿回到中心
          </h2>

          <p
            class="mt-1 text-xs text-white/45"
          >
            確認 Pitch、Roll、Yaw 都已回中
          </p>
        </div>

        <span
          class="shrink-0 text-[9px] uppercase tracking-[0.14em] text-sky-200/70"
        >
          Ready
        </span>
      </div>

      <!-- 準備下一題 -->
      <div
        v-else-if="
          waitingForNextRound
          && !exercise
        "
        class="flex items-center gap-4"
      >
        <div
          class="grid size-11 shrink-0 place-items-center rounded-full border border-lime-300/20 bg-lime-300/10"
        >
          <span class="text-base text-lime-200">
            ✓
          </span>
        </div>

        <div class="min-w-0 flex-1">
          <p
            class="text-[9px] uppercase tracking-[0.18em] text-white/35"
          >
            Stick Training · Level 1
          </p>

          <h2
            class="mt-1 text-base font-semibold text-white"
          >
            已回到中心
          </h2>

          <p
            class="mt-1 text-xs text-white/45"
          >
            準備下一題…
          </p>
        </div>
      </div>

      <!-- 正式題目 -->
      <template v-else-if="exercise">
        <!-- 題目列 -->
        <div
          class="flex items-center gap-4"
        >
          <!-- Round -->
          <div
            class="shrink-0 border-r border-white/10 pr-4"
          >
            <p
              class="text-[8px] uppercase tracking-[0.18em] text-white/30"
            >
              Round
            </p>

            <p
              class="mt-1 font-mono text-lg font-semibold text-white/75"
            >
              {{ round }}
            </p>
          </div>

          <!-- 指令 -->
          <div
            class="min-w-0 flex-1"
          >
            <div
              class="flex items-baseline gap-2"
            >
              <h2
                class="text-xl font-black tracking-[0.05em] text-white"
              >
                {{ exercise.title }}
              </h2>

              <span
                class="text-xs font-semibold text-lime-200"
              >
                {{ exercise.label }}
              </span>
            </div>

            <p
              class="mt-1 text-[11px] text-white/45"
            >
              {{ exercise.instruction }}
            </p>
          </div>

          <!-- Stick -->
          <div
            class="flex shrink-0 items-center gap-2.5"
          >
            <div
              class="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]"
            >
              <span
                class="text-2xl leading-none text-white"
              >
                {{ exercise.arrow }}
              </span>
            </div>

            <div>
              <p
                class="text-[8px] uppercase tracking-[0.14em] text-white/30"
              >
                Stick
              </p>

              <p
                class="mt-1 text-[11px] font-semibold text-white/70"
              >
                {{ exercise.stick }}
              </p>
            </div>
          </div>
        </div>

        <!-- 控制幅度 -->
        <div class="mt-4">
          <div
            class="mb-2 flex items-center justify-between"
          >
            <span
              class="text-[8px] uppercase tracking-[0.16em] text-white/30"
            >
              控制幅度
            </span>

            <span
              class="font-mono text-xs font-semibold tabular-nums"
              :class="
                completed
                  ? 'text-lime-200'
                  : errorType
                    ? 'text-red-300'
                    : inSuccessZone
                      ? 'text-lime-200'
                      : 'text-white/70'
              "
            >
              {{ progressPercent }}%
            </span>
          </div>

          <!-- Range -->
          <div
            class="relative h-6"
          >
            <!-- 基礎軌道 -->
            <div
              class="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/10"
            />

            <!-- 成功區底 -->
            <div
              class="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-lime-300/20"
              :class="
                inSuccessZone
                  ? 'shadow-[0_0_12px_rgba(190,242,100,0.20)]'
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

            <!-- 左界線 -->
            <div
              class="absolute top-0 h-6 w-px bg-lime-300/70"
              :style="{
                left:
                  `${successMinPercent}%`,
              }"
            />

            <!-- 右界線 -->
            <div
              class="absolute top-0 h-6 w-px bg-lime-300/70"
              :style="{
                left:
                  `${successMaxPercent}%`,
              }"
            />

            <!-- 游標 -->
            <div
              class="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black transition-[left,background-color,box-shadow] duration-75"
              :class="
                completed
                  ? 'bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,0.8)]'
                  : errorType
                    ? 'bg-red-300 shadow-[0_0_10px_rgba(252,165,165,0.55)]'
                    : inSuccessZone
                      ? 'bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,0.7)]'
                      : 'bg-white'
              "
              :style="{
                left:
                  `${progressPercent}%`,
              }"
            />
          </div>

          <!-- 尺度 -->
          <div
            class="relative mt-1 h-4 text-[8px] text-white/25"
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

            <span
              class="absolute left-1/2 -translate-x-1/2 uppercase tracking-[0.14em] text-lime-200/45"
            >
              目標區
            </span>
          </div>
        </div>

        <!-- 狀態 -->
        <div
          class="mt-2 flex min-h-6 items-center justify-center"
        >
          <!-- 等待回中 -->
          <template
            v-if="waitingForCenter"
          >
            <span
              class="text-[11px] font-semibold text-sky-200"
            >
              ◎ 正確，請放開搖桿回到中心
            </span>
          </template>

          <!-- Hold 中 -->
          <template
            v-else-if="
              inSuccessZone
              && successHoldProgress > 0
              && !completed
            "
          >
            <div
              class="flex items-center gap-2.5"
            >
              <span
                class="text-[10px] font-semibold text-lime-200"
              >
                保持穩定
              </span>

              <div
                class="h-1.5 w-24 overflow-hidden rounded-full bg-white/10"
              >
                <div
                  class="h-full origin-left rounded-full bg-lime-300 transition-transform duration-75"
                  :style="{
                    transform:
                      `scaleX(${successHoldProgress})`,
                  }"
                />
              </div>

              <span
                class="w-8 text-right font-mono text-[10px] font-semibold tabular-nums text-lime-200"
              >
                {{ holdPercent }}%
              </span>
            </div>
          </template>

          <!-- 完成 -->
          <template
            v-else-if="completed"
          >
            <span
              class="text-[11px] font-semibold text-lime-200"
            >
              ✓ 穩定保持完成
            </span>
          </template>

          <!-- Error -->
          <template
            v-else-if="errorType"
          >
            <span
              class="text-[11px] font-semibold text-red-200"
            >
              ⚠ {{ errorMessage }}
            </span>
          </template>

          <!-- 普通 -->
          <template v-else>
            <span
              class="text-[10px] text-white/35"
            >
              將輸入控制在
              {{ successMinPercent }}～{{ successMaxPercent }}%
            </span>
          </template>
        </div>
      </template>
    </section>
  </div>
</template>