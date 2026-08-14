<script setup>
import { useGamepadDiagnostics } from '@/composables/useGamepadDiagnostics.js'

const emit = defineEmits(['close'])

const {
  supported,
  connected,
  gamepadIndex,
  gamepadId,
  mapping,
  axes,
  buttons,
  axisCount,
  buttonCount,
  resetRange,
  captureBaseline,
} = useGamepadDiagnostics()

const axisLabels = {
  0: {
    name: 'Roll',
    description: '左移 / 右移',
  },
  1: {
    name: 'Pitch',
    description: '後移 / 前移',
  },
  2: {
    name: 'Throttle',
    description: '下降 / 升高',
  },
  3: {
    name: 'Yaw',
    description: '左轉 / 右轉',
  },
  4: {
    name: 'SA',
    description: '兩段開關',
  },
  5: {
    name: 'SB',
    description: '三段開關',
  },
  6: {
    name: 'SC',
    description: '三段開關',
  },
  7: {
    name: 'SD',
    description: '兩段開關',
  },
}

function getAxisLabel(index) {
  return axisLabels[index] ?? {
    name: 'Unknown',
    description: '尚未設定',
  }
}

function formatValue(value) {
  return Number(value ?? 0).toFixed(4)
}

function axisPercent(value) {
  return Math.min(
    100,
    Math.max(
      0,
      ((Number(value ?? 0) + 1) / 2) * 100,
    ),
  )
}
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
    @click.self="emit('close')"
  >
    <section
      class="flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-sky-300/20 bg-[#11151c] shadow-2xl shadow-black/60"
    >
      <!-- Header -->
      <header
        class="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6"
      >
        <div>
          <div class="flex flex-wrap items-center gap-2">
            <span
              class="h-2.5 w-2.5 rounded-full"
              :class="
                connected
                  ? 'bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,.75)]'
                  : 'bg-white/25'
              "
            />

            <p class="text-sm font-semibold text-sky-100">
              Controller Debug
            </p>

            <span
              class="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45"
            >
              v0.4
            </span>
          </div>

          <p class="mt-1 text-xs leading-5 text-white/45">
            讀取瀏覽器 Gamepad API 原始資料，不會控制無人機。
          </p>
        </div>

        <button
          type="button"
          class="shrink-0 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/55 transition hover:bg-white/10 hover:text-white"
          @click="emit('close')"
        >
          關閉
        </button>
      </header>

      <!-- Scroll Area -->
      <div class="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
        <div
          v-if="!supported"
          class="rounded-xl border border-rose-300/20 bg-rose-300/10 p-3 text-sm leading-6 text-rose-100"
        >
          這個瀏覽器沒有提供 Gamepad API。
          請改用最新版 Chrome 或其他支援 Gamepad API 的瀏覽器。
        </div>

        <template v-else>
          <!-- Connection -->
          <div
            class="rounded-2xl border border-white/10 bg-black/25 p-4"
          >
            <div class="flex items-center justify-between gap-3">
              <p
                class="text-xs font-semibold uppercase tracking-[0.18em] text-white/40"
              >
                Connection
              </p>

              <span
                class="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                :class="
                  connected
                    ? 'bg-lime-300/15 text-lime-200'
                    : 'bg-white/5 text-white/40'
                "
              >
                {{ connected ? 'CONNECTED' : 'WAITING' }}
              </span>
            </div>

            <template v-if="connected">
              <p
                class="mt-3 break-all text-sm font-medium leading-6 text-white/85"
              >
                {{ gamepadId }}
              </p>

              <div
                class="mt-3 grid grid-cols-2 gap-2 text-xs text-white/45 sm:grid-cols-4"
              >
                <p>
                  Index
                  <span class="font-mono text-white/75">
                    {{ gamepadIndex }}
                  </span>
                </p>

                <p>
                  Mapping
                  <span class="font-mono text-white/75">
                    {{ mapping || 'none' }}
                  </span>
                </p>

                <p>
                  Axes
                  <span class="font-mono text-white/75">
                    {{ axisCount }}
                  </span>
                </p>

                <p>
                  Buttons
                  <span class="font-mono text-white/75">
                    {{ buttonCount }}
                  </span>
                </p>
              </div>
            </template>

            <p
              v-else
              class="mt-3 text-sm leading-6 text-white/55"
            >
              插上 LiteRadio 2 SIM 後，動一下搖桿或按任一按鈕。
              部分瀏覽器要收到第一次操作後才會顯示控制器。
            </p>
          </div>

          <template v-if="connected">
            <!-- Actions -->
            <div class="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                class="rounded-xl bg-sky-200 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-100"
                @click="resetRange"
              >
                重置 Min / Max
              </button>

              <button
                type="button"
                class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70 transition hover:bg-white/10"
                @click="captureBaseline"
              >
                記錄目前值為 Baseline
              </button>
            </div>

            <!-- Axis -->
            <div
              class="mt-4 grid gap-3 lg:grid-cols-2"
            >
              <article
                v-for="(axis, index) in axes"
                :key="index"
                class="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <div class="flex flex-wrap items-center gap-2">
                      <p class="text-sm font-semibold text-white/80">
                        AXIS {{ index }}
                      </p>

                      <span
                        class="rounded-md border border-sky-300/15 bg-sky-300/[0.07] px-2 py-0.5 text-[11px] font-semibold text-sky-100"
                      >
                        {{ getAxisLabel(index).name }}
                      </span>
                    </div>

                    <p class="mt-1 text-[11px] text-white/40">
                      {{ getAxisLabel(index).description }}
                    </p>
                  </div>

                  <p
                    class="font-mono text-base font-semibold tabular-nums text-sky-100"
                  >
                    {{ formatValue(axis.current) }}
                  </p>
                </div>

                <div
                  class="relative mt-3 h-2 overflow-hidden rounded-full bg-white/10"
                >
                  <div
                    class="absolute inset-y-0 left-1/2 w-px bg-white/35"
                  />

                  <div
                    class="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200 shadow-[0_0_10px_rgba(186,230,253,.65)]"
                    :style="{
                      left: `${axisPercent(axis.current)}%`,
                    }"
                  />
                </div>

                <div
                  class="mt-3 grid grid-cols-3 gap-2 text-[11px] text-white/40"
                >
                  <div>
                    <p>MIN</p>
                    <p
                      class="mt-0.5 font-mono tabular-nums text-white/70"
                    >
                      {{ formatValue(axis.min) }}
                    </p>
                  </div>

                  <div class="text-center">
                    <p>BASELINE</p>
                    <p
                      class="mt-0.5 font-mono tabular-nums text-white/70"
                    >
                      {{ formatValue(axis.baseline) }}
                    </p>
                  </div>

                  <div class="text-right">
                    <p>MAX</p>
                    <p
                      class="mt-0.5 font-mono tabular-nums text-white/70"
                    >
                      {{ formatValue(axis.max) }}
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <!-- Buttons -->
            <div class="mt-5">
              <p
                class="text-xs font-semibold uppercase tracking-[0.18em] text-white/40"
              >
                Buttons
              </p>

              <div
                class="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8"
              >
                <div
                  v-for="button in buttons"
                  :key="button.index"
                  class="rounded-lg border px-2 py-2 text-center font-mono text-xs"
                  :class="
                    button.pressed
                      ? 'border-lime-300/40 bg-lime-300/15 text-lime-100'
                      : 'border-white/10 bg-black/20 text-white/45'
                  "
                >
                  <p>B{{ button.index }}</p>
                  <p class="mt-1 text-[10px]">
                    {{ formatValue(button.value) }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Hint -->
            <div
              class="mt-5 rounded-2xl border border-amber-200/15 bg-amber-200/[0.055] p-4 text-xs leading-5 text-amber-50/70"
            >
              測量前先按「重置 Min / Max」。
              接著一次只動一個方向到盡頭，再放回原位。
              四個方向都測完後，把這個面板截圖給我，
              我們就能建立 LiteRadio 的 Axis Mapping。
            </div>
          </template>
        </template>
      </div>
    </section>
  </div>
</template>