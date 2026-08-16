<script setup>
import { computed } from 'vue'

import {
  stabilityDurationOptions,
  stabilityWindOptions,
  stabilityZoneOptions,
} from '@/stores/settingsStore.js'

const props = defineProps({
  settings: {
    type: Object,
    required: true,
  },

  embedded: {
    type: Boolean,
    default: false,
  },

  showDifficulty: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits([
  'update-wind-level',
  'update-zone-size',
  'update-duration',
])

const durationPresetValues =
  stabilityDurationOptions.map(
    option => option.value,
  )

const isCustomDuration =
  computed(() =>
    !durationPresetValues.includes(
      Number(
        props.settings.stabilityDuration,
      ),
    ),
  )

function selectWindLevel(value) {
  emit('update-wind-level', value)
}

function selectZoneSize(value) {
  emit('update-zone-size', value)
}

function selectDuration(value) {
  emit('update-duration', value)
}

function selectCustomDuration() {
  if (isCustomDuration.value) {
    return
  }

  emit('update-duration', 90)
}

function updateCustomDuration(event) {
  emit(
    'update-duration',
    event.target.value,
  )
}
</script>

<template>
  <section
    :class="
      embedded
        ? ''
        : 'rounded-2xl border border-white/10 bg-white/[0.035] p-4'
    "
  >
    <div
      v-if="!embedded"
      class="mb-5"
    >
      <p
        class="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-300/70"
      >
        Stability Training
      </p>

      <h2
        class="mt-1 text-base font-semibold text-white"
      >
        訓練設定
      </h2>
    </div>

    <template v-if="showDifficulty">
      <div>
        <p
          class="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/45"
        >
          Wind
        </p>

        <div class="grid grid-cols-3 gap-2">
          <button
            v-for="option in stabilityWindOptions"
            :key="option.value"
            type="button"
            class="rounded-xl border px-3 py-3 text-center transition"
            :class="
              settings.stabilityWindLevel === option.value
                ? 'border-lime-300/50 bg-lime-300/10 text-lime-200'
                : 'border-white/10 bg-white/2.5 text-white/55 hover:border-white/20 hover:bg-white/5'
            "
            @click="selectWindLevel(option.value)"
          >
            <span class="block text-sm font-semibold">
              {{ option.label }}
            </span>
          </button>
        </div>

        <p class="mt-2 text-xs text-white/40">
          {{
            stabilityWindOptions.find(
              option =>
                option.value
                === settings.stabilityWindLevel,
            )?.description
          }}
        </p>
      </div>

      <div
        class="mt-5 border-t border-white/8 pt-5"
      >
        <p
          class="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/45"
        >
          Target Size
        </p>

        <div class="grid grid-cols-3 gap-2">
          <button
            v-for="option in stabilityZoneOptions"
            :key="option.value"
            type="button"
            class="rounded-xl border px-3 py-3 text-center transition"
            :class="
              settings.stabilityZoneSize === option.value
                ? 'border-lime-300/50 bg-lime-300/10 text-lime-200'
                : 'border-white/10 bg-white/2.5 text-white/55 hover:border-white/20 hover:bg-white/5'
            "
            @click="selectZoneSize(option.value)"
          >
            <span class="block text-sm font-semibold">
              {{ option.label }}
            </span>

            <span
              class="mt-1 block font-mono text-[10px] text-white/35"
            >
              R {{ option.radius.toFixed(1) }} m
            </span>
          </button>
        </div>

        <p class="mt-2 text-xs text-white/40">
          {{
            stabilityZoneOptions.find(
              option =>
                option.value
                === settings.stabilityZoneSize,
            )?.description
          }}
        </p>
      </div>
    </template>

    <div
      :class="
        showDifficulty
          ? 'mt-5 border-t border-white/8 pt-5'
          : ''
      "
    >
      <div
        class="mb-2 flex items-center justify-between gap-3"
      >
        <p
          class="text-xs font-semibold uppercase tracking-[0.16em] text-white/45"
        >
          Duration
        </p>

        <span
          class="text-[11px] text-white/30"
        >
          訓練時間
        </span>
      </div>

      <div class="grid grid-cols-4 gap-2">
        <button
          v-for="option in stabilityDurationOptions"
          :key="option.value"
          type="button"
          class="rounded-xl border px-2 py-3 text-center transition"
          :class="
            Number(settings.stabilityDuration) === option.value
              ? 'border-lime-300/50 bg-lime-300/10 text-lime-200'
              : 'border-white/10 bg-white/2.5 text-white/55 hover:border-white/20 hover:bg-white/5'
          "
          @click="selectDuration(option.value)"
        >
          <span class="block text-sm font-semibold">
            {{ option.label }}
          </span>

          <span
            class="mt-1 block text-[10px] text-white/30"
          >
            {{ option.description }}
          </span>
        </button>

        <button
          type="button"
          class="rounded-xl border px-2 py-3 text-center transition"
          :class="
            isCustomDuration
              ? 'border-lime-300/50 bg-lime-300/10 text-lime-200'
              : 'border-white/10 bg-white/2.5 text-white/55 hover:border-white/20 hover:bg-white/5'
          "
          @click="selectCustomDuration"
        >
          <span class="block text-sm font-semibold">
            自訂
          </span>

          <span
            class="mt-1 block text-[10px] text-white/30"
          >
            10–600 秒
          </span>
        </button>
      </div>

      <div
        v-if="isCustomDuration"
        class="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/2.5 p-3"
      >
        <label
          for="stability-custom-duration"
          class="text-xs text-white/45"
        >
          自訂秒數
        </label>

        <input
          id="stability-custom-duration"
          :value="settings.stabilityDuration"
          type="number"
          min="10"
          max="600"
          step="10"
          class="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-sm text-white outline-none transition focus:border-lime-300/40"
          @change="updateCustomDuration"
        >

        <span class="text-xs text-white/40">
          秒
        </span>
      </div>

      <p class="mt-2 text-xs text-white/40">
        30 秒適合快速練習，60 秒為標準訓練，
        120 秒以上開始考驗持續穩定控制。
      </p>
    </div>
  </section>
</template>
