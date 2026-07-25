<script setup>
import StickIndicator from '@/components/ui/StickIndicator.vue'
defineProps({ input: Object, settings: Object })
</script>

<template>
  <section class="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
    <div class="mb-4 flex items-center justify-between">
      <div><p class="text-xs uppercase tracking-[0.2em] text-white/40">Mode 2</p><h2 class="mt-1 font-semibold">搖桿輸入</h2></div>
      <label class="flex items-center gap-2 text-xs text-white/55"><input v-model="settings.showHeadingArrow" type="checkbox" class="accent-lime-300">機頭箭頭</label>
    </div>
    <div class="grid grid-cols-2 gap-3">
      <StickIndicator title="左桿" :x="input.yaw" :y="input.throttle" x-label="Yaw" y-label="Throttle" />
      <StickIndicator title="右桿" :x="input.roll" :y="input.pitch" x-label="Roll" y-label="Pitch" />
    </div>
    <div class="mt-4 grid grid-cols-2 gap-2 text-xs text-white/55">
      <div class="rounded-xl bg-black/20 p-3"><strong class="text-white">W / S</strong><br>前後 Pitch</div>
      <div class="rounded-xl bg-black/20 p-3"><strong class="text-white">A / D</strong><br>左右 Roll</div>
      <div class="rounded-xl bg-black/20 p-3"><strong class="text-white">↑ / ↓</strong><br>升降 Throttle</div>
      <div class="rounded-xl bg-black/20 p-3"><strong class="text-white">← / →</strong><br>旋轉 Yaw</div>
    </div>
  </section>
</template>
