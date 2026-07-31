<script setup>
defineProps({
  challenge: {
    type: Object,
    default: null,
  },
})
</script>

<template>
  <div
    v-if="challenge"
    class="pointer-events-none absolute left-4 top-28 w-72 rounded-2xl border border-white/10 bg-black/60 p-4 text-white backdrop-blur"
  >
    <div class="flex items-center justify-between gap-3">
      <p class="text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300/70">
        Random Heading
      </p>
      <span class="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/55">
        ROUND {{ challenge.round }}
      </span>
    </div>

    <div class="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
      <div class="rounded-xl bg-white/5 p-3 text-center">
        <p class="text-[10px] uppercase tracking-[0.16em] text-white/40">機頭</p>
        <p class="mt-1 text-2xl font-semibold">{{ challenge.headingLabel }}</p>
        <p class="text-xs text-white/45">{{ challenge.headingDegrees }}°</p>
      </div>

      <div class="text-white/30">＋</div>

      <div class="rounded-xl bg-lime-300/10 p-3 text-center">
        <p class="text-[10px] uppercase tracking-[0.16em] text-lime-200/60">前往</p>
        <p class="mt-1 text-3xl font-semibold text-lime-200">{{ challenge.targetArrow }}</p>
        <p class="text-xs text-lime-100/70">{{ challenge.targetLabel }}</p>
      </div>
    </div>

    <div
      v-if="challenge.completed"
      class="mt-4 rounded-xl border border-lime-300/25 bg-lime-300/10 p-3 text-center"
    >
      <p class="text-sm font-semibold text-lime-200">完成，準備下一題</p>
      <p class="mt-1 text-xs text-white/50">機頭將重新隨機轉向</p>
    </div>

    <div v-else class="mt-4">
      <div class="flex items-center justify-between text-xs text-white/50">
        <span>保持機頭，僅用 Pitch／Roll</span>
        <span>{{ challenge.progress.toFixed(1) }} / {{ challenge.targetDistance.toFixed(1) }} m</span>
      </div>

      <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          class="h-full rounded-full bg-lime-300 transition-[width] duration-100"
          :style="{
            width: `${Math.min(challenge.progress / challenge.targetDistance * 100, 100)}%`,
          }"
        />
      </div>
    </div>

    <p class="mt-3 text-xs leading-5 text-white/45">
      Yaw 已鎖定。請勿先轉正機頭，直接讓機體側移或倒退前往世界方向。
    </p>
  </div>
</template>
