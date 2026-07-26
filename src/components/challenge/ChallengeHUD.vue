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
    class="pointer-events-none absolute left-4 top-28 w-72 rounded-2xl border border-white/10 bg-black/55 p-4 text-white backdrop-blur"
  >
    <p
      class="text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300/70"
    >
      Challenge
    </p>

    <h2 class="mt-1 text-base font-semibold">
      {{ challenge.title }}
    </h2>

    <p class="mt-1 text-sm text-white/60">
      {{ challenge.description }}
    </p>

    <div
      v-if="challenge.completed"
      class="mt-4 rounded-xl border border-lime-300/20 bg-lime-300/10 p-3"
    >
      <p class="text-sm font-semibold text-lime-200">
        挑戰完成
      </p>

      <p class="mt-1 text-xs text-white/50">
        已完成全部 {{ challenge.totalSteps }} 個步驟
      </p>
    </div>

    <div
      v-else
      class="mt-4 rounded-xl bg-white/5 p-3"
    >
      <p class="text-xs text-white/40">
        步驟
        {{ challenge.stepIndex + 1 }}
        /
        {{ challenge.totalSteps }}
      </p>

      <p class="mt-1 text-sm font-medium">
        {{ challenge.currentStep }}
      </p>

      <p class="mt-2 text-xs text-white/50">
        進度：
        {{ challenge.progress.toFixed(1) }}
        /
        {{ challenge.targetDistance.toFixed(1) }}
        m
      </p>

      <div
        class="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"
      >
        <div
          class="h-full rounded-full bg-lime-300 transition-[width] duration-100"
          :style="{
            width: `${
              Math.min(
                challenge.progress
                / challenge.targetDistance
                * 100,
                100,
              )
            }%`,
          }"
        />
      </div>
    </div>
  </div>
</template>