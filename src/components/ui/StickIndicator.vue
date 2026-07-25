<script setup>
defineProps({
  title: { type: String, required: true },
  horizontalLabel: { type: String, required: true },
  verticalLabel: { type: String, required: true },
  x: { type: Number, default: 0 },
  y: { type: Number, default: 0 },
})
</script>

<template>
  <div class="space-y-2">
    <div class="flex items-center justify-between text-xs text-white/60">
      <span>{{ title }}</span>
      <span>{{ horizontalLabel }} / {{ verticalLabel }}</span>
    </div>

    <div class="relative aspect-square w-24 rounded-full border border-white/15 bg-black/30">
      <div class="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-white/10" />
      <div class="absolute top-1/2 left-2 right-2 h-px -translate-y-1/2 bg-white/10" />
      <div
        class="absolute left-1/2 top-1/2 size-5 rounded-full border border-lime-200/80 bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.55)] transition-transform duration-75"
        :style="{
          transform: `translate(calc(-50% + ${x * 31}px), calc(-50% + ${-y * 31}px))`,
        }"
      />
    </div>
  </div>
</template>
