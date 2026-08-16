<script setup>
import {
  stabilityWindOptions,
  stabilityZoneOptions,
} from '@/stores/settingsStore.js'

defineProps({
  settings: {
    type: Object,
    required: true,
  },

  embedded: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([
  'update-wind-level',
  'update-zone-size',
])

function selectWindLevel(value) {
  emit('update-wind-level', value)
}

function selectZoneSize(value) {
  emit('update-zone-size', value)
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
        Stability Training Lv.2
      </p>

      <h2 class="mt-1 text-base font-semibold text-white">
        訓練難度
      </h2>
    </div>

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
              option.value === settings.stabilityWindLevel,
          )?.description
        }}
      </p>
    </div>

    <div class="mt-5 border-t border-white/8 pt-5">
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
              option.value === settings.stabilityZoneSize,
          )?.description
        }}
      </p>
    </div>
  </section>
</template>
