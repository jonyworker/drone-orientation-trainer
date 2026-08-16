<script setup>
defineProps({
  timeLabel: {
    type: String,
    required: true,
  },

  phase: {
    type: String,
    required: true,
  },

  headingLabel: {
    type: String,
    default: '-',
  },

  totalLabel: {
    type: String,
    default: '00:00.0',
  },

  insideLabel: {
    type: String,
    default: '00:00.0',
  },

  outsideLabel: {
    type: String,
    default: '00:00.0',
  },

  stabilityLabel: {
    type: String,
    default: '0.0%',
  },
})

const emit = defineEmits([
  'retry',
])
</script>

<template>
  <!-- 遊戲進行中 -->
  <div
    v-if="phase === 'running'"
    class="pointer-events-none absolute left-1/2 top-5 z-30 -translate-x-1/2"
  >
    <div
      class="rounded-full border border-white/10 bg-black/55 px-5 py-2 font-mono text-lg font-semibold tracking-[0.18em] text-white backdrop-blur"
    >
      {{ timeLabel }}
    </div>
  </div>

  <!-- 結算 -->
  <div
    v-else-if="phase === 'finished'"
    class="absolute inset-0 z-40 flex items-center justify-center bg-black/55 backdrop-blur-sm"
  >
    <section
      class="w-[min(420px,calc(100%-32px))] rounded-3xl border border-white/10 bg-black/80 p-6 shadow-2xl"
    >
      <header class="mb-6">
        <p
          class="text-xs font-semibold uppercase tracking-[0.22em] text-lime-300"
        >
          Stability Training
        </p>

        <h2
          class="mt-2 text-2xl font-semibold text-white"
        >
          穩定控制完成
        </h2>
      </header>

      <!-- Heading -->
      <div
        class="mb-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
      >
        <p
          class="text-[11px] uppercase tracking-[0.18em] text-white/40"
        >
          Heading
        </p>

        <p
          class="mt-1 text-xl font-semibold text-white"
        >
          {{ headingLabel }}
        </p>
      </div>

      <!-- Result -->
      <div class="grid grid-cols-2 gap-3">
        <div
          class="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
        >
          <p
            class="text-[11px] uppercase tracking-[0.16em] text-white/40"
          >
            Total
          </p>

          <p
            class="mt-1 font-mono text-lg font-semibold text-white"
          >
            {{ totalLabel }}
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
        >
          <p
            class="text-[11px] uppercase tracking-[0.16em] text-white/40"
          >
            Stability
          </p>

          <p
            class="mt-1 font-mono text-lg font-semibold text-lime-300"
          >
            {{ stabilityLabel }}
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
        >
          <p
            class="text-[11px] uppercase tracking-[0.16em] text-white/40"
          >
            In Zone
          </p>

          <p
            class="mt-1 font-mono text-lg font-semibold text-white"
          >
            {{ insideLabel }}
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
        >
          <p
            class="text-[11px] uppercase tracking-[0.16em] text-white/40"
          >
            Out of Zone
          </p>

          <p
            class="mt-1 font-mono text-lg font-semibold text-white"
          >
            {{ outsideLabel }}
          </p>
        </div>
      </div>

      <!-- Retry -->
      <button
        type="button"
        class="mt-5 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-200 active:scale-[0.99]"
        @click="emit('retry')"
      >
        再次挑戰
      </button>
    </section>
  </div>
</template>