<script setup>
import {
  cameraBearingOptions,
  cameraHeightOptions,
  trainingOptions,
  windOptions,
} from '@/stores/settingsStore.js'

const props = defineProps({ settings: Object, paused: Boolean })
const emit = defineEmits(['toggle-pause', 'reset', 'toggle-help', 'toggle-controller-debug'])
</script>

<template>
  <header class="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur">
    <div>
      <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-lime-300/80">v0.4 Controller Foundation · Third-person ATTI trainer</p>
      <h1 class="mt-1 text-xl font-semibold tracking-tight lg:text-2xl">Drone Orientation Trainer</h1>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <label v-for="field in [
        { label: '訓練', key: 'trainingMode', options: trainingOptions },
        { label: '風況', key: 'windMode', options: windOptions },
        { label: '相機高度', key: 'cameraHeight', options: cameraHeightOptions },
        { label: '相機方位', key: 'cameraBearing', options: cameraBearingOptions },
      ]" :key="field.key" class="flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white/70">
        <span>{{ field.label }}</span>
        <select v-model="props.settings[field.key]" class="bg-transparent text-white outline-none">
          <option v-for="option in field.options" :key="option.value" :value="option.value" class="bg-[#171a20]">{{ option.label }}</option>
        </select>
      </label>

      <button class="rounded-xl border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm text-sky-100 hover:bg-sky-300/15" @click="emit('toggle-controller-debug')">🎮 遙控器診斷</button>
      <button class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10" @click="emit('toggle-help')">操作說明</button>
      <button class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10" @click="emit('toggle-pause')">{{ paused ? '繼續' : '暫停' }}</button>
      <button class="rounded-xl bg-lime-300 px-4 py-2 text-sm font-semibold text-black hover:bg-lime-200" @click="emit('reset')">重置</button>
    </div>
  </header>
</template>
