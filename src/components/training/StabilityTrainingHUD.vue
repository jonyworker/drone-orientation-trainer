<script setup>
import StabilityTrainingSettings from '@/components/training/StabilityTrainingSettings.vue'
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

  readyCount: {
    type: Number,
    default: 3,
  },

  level: {
    type: Number,
    default: 1,
  },

  settings: {
    type: Object,
    default: null,
  },

  showDifficulty: {
    type: Boolean,
    default: false,
  },

  windLabel: {
    type: String,
    default: '',
  },

  zoneLabel: {
    type: String,
    default: '',
  },

  durationLabel: {
    type: String,
    default: '',
  },
})

const emit = defineEmits([
  'start',
  'retry',
  'change-settings',
  'update-heading',
  'update-wind-level',
  'update-zone-size',
  'update-duration',
])
</script>

<template>
  <!-- Lv.2 飛行前設定 -->
  <div
    v-if="phase === 'setup'"
    class="absolute inset-0 z-40 flex items-center justify-center bg-black/40 px-4 py-4 backdrop-blur-[2px]"
  >
    <section
      class="pointer-events-auto max-h-[calc(100%-16px)] w-[min(580px,calc(100%-16px))] overflow-y-auto rounded-3xl border border-white/10 bg-black/80 p-6 shadow-2xl backdrop-blur"
    >
      <header class="mb-5">
        <p
          class="text-xs font-semibold uppercase tracking-[0.22em] text-lime-300"
        >
          Stability Training Lv.{{ level }}
        </p>

        <h2
          class="mt-2 text-2xl font-semibold text-white"
        >
          準備好了嗎？
        </h2>

        <p
          v-if="level === 1"
          class="mt-2 text-sm leading-6 text-white/50"
        >
          保持機頭方向不變，只使用 Pitch／Roll，將無人機維持在穩定範圍內。
        </p>

        <p
          v-else
          class="mt-2 text-sm leading-6 text-white/50"
        >
          設定本回合的風力與穩定範圍，確認後開始訓練。
        </p>
      </header>

      <StabilityTrainingSettings
        v-if="settings"
        :settings="settings"
        :embedded="true"
        :show-difficulty="level === 2"
        @update-heading="
          emit('update-heading', $event)
        "
        @update-wind-level="
          emit('update-wind-level', $event)
        "
        @update-zone-size="
          emit('update-zone-size', $event)
        "
        @update-duration="
          emit('update-duration', $event)
        "
      />

      <button
        type="button"
        class="mt-5 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold tracking-[0.12em] text-black transition hover:bg-lime-200 active:scale-[0.99]"
        @click="emit('start')"
      >
        START
      </button>
    </section>
  </div>

  <!-- 開始前倒數 -->
  <div
    v-else-if="phase === 'ready'"
    class="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
  >
    <div
      class="flex flex-col items-center rounded-3xl border border-white/10 bg-black/55 px-10 py-8 text-center backdrop-blur"
    >
      <p
        class="text-xs font-semibold uppercase tracking-[0.22em] text-lime-300"
      >
        Stability Training Lv.{{ level }}
      </p>

      <div
        class="mt-4 flex flex-wrap justify-center gap-2"
      >
        <template v-if="showDifficulty">
          <span
            class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
          >
            WIND · {{ windLabel }}
          </span>

          <span
            class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
          >
            TARGET · {{ zoneLabel }}
          </span>
        </template>

        <span
          class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
        >
          TIME · {{ durationLabel }}
        </span>
      </div>

      <p
        class="mt-3 text-sm uppercase tracking-[0.16em] text-white/50"
      >
        Heading
      </p>

      <p
        class="mt-1 text-xl font-semibold text-white"
      >
        {{ headingLabel }}
      </p>

      <p
        class="mt-6 font-mono text-6xl font-semibold text-white"
      >
        {{ readyCount }}
      </p>
    </div>
  </div>

  <!-- 遊戲進行中 -->
  <div
    v-else-if="phase === 'running'"
    class="pointer-events-none absolute left-1/2 top-5 z-30 -translate-x-1/2"
  >
    <div
      class="flex items-center gap-3 rounded-full border border-white/10 bg-black/55 px-5 py-2 backdrop-blur"
    >
      <span
        class="font-mono text-lg font-semibold tracking-[0.18em] text-white"
      >
        {{ timeLabel }}
      </span>

      <template v-if="showDifficulty">
        <span class="h-4 w-px bg-white/10" />

        <span class="text-xs text-white/50">
          {{ windLabel }}
        </span>

        <span class="text-xs text-white/30">
          ·
        </span>

        <span class="text-xs text-white/50">
          {{ zoneLabel }}
        </span>
      </template>
    </div>
  </div>

  <!-- 結算 -->
  <div
    v-else-if="phase === 'finished'"
    class="absolute inset-0 z-40 flex items-center justify-center bg-black/55 backdrop-blur-sm"
  >
    <section
      class="pointer-events-auto w-[min(420px,calc(100%-32px))] rounded-3xl border border-white/10 bg-black/80 p-6 shadow-2xl"
    >
      <header class="mb-6">
        <p
          class="text-xs font-semibold uppercase tracking-[0.22em] text-lime-300"
        >
          Stability Training Lv.{{ level }}
        </p>

        <h2
          class="mt-2 text-2xl font-semibold text-white"
        >
          穩定控制完成
        </h2>
      </header>

      <div
        v-if="showDifficulty"
        class="mb-5 grid grid-cols-2 gap-3"
      >
        <div
          class="rounded-2xl border border-white/10 bg-white/4 p-4"
        >
          <p
            class="text-[11px] uppercase tracking-[0.18em] text-white/40"
          >
            Wind
          </p>

          <p
            class="mt-1 text-base font-semibold text-white"
          >
            {{ windLabel }}
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-white/4 p-4"
        >
          <p
            class="text-[11px] uppercase tracking-[0.18em] text-white/40"
          >
            Target
          </p>

          <p
            class="mt-1 text-base font-semibold text-white"
          >
            {{ zoneLabel }}
          </p>
        </div>
      </div>

      <div
        class="mb-5 grid grid-cols-2 gap-3"
      >
        <div
          class="rounded-2xl border border-white/10 bg-white/4 p-4"
        >
          <p
            class="text-[11px] uppercase tracking-[0.18em] text-white/40"
          >
            Heading
          </p>

          <p
            class="mt-1 text-base font-semibold text-white"
          >
            {{ headingLabel }}
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/10 bg-white/4 p-4"
        >
          <p
            class="text-[11px] uppercase tracking-[0.18em] text-white/40"
          >
            Duration
          </p>

          <p
            class="mt-1 text-base font-semibold text-white"
          >
            {{ durationLabel }}
          </p>
        </div>
      </div>

      <!-- Result -->
      <div class="grid grid-cols-2 gap-3">
        <div
          class="rounded-2xl border border-white/10 bg-white/4 p-4"
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
          class="rounded-2xl border border-white/10 bg-white/4 p-4"
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
          class="rounded-2xl border border-white/10 bg-white/4 p-4"
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
          class="rounded-2xl border border-white/10 bg-white/4 p-4"
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

      <button
        type="button"
        class="mt-5 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-200 active:scale-[0.99]"
        @click="emit('retry')"
      >
        再次挑戰
      </button>

      <button
        v-if="level === 2 && showDifficulty"
        type="button"
        class="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white active:scale-[0.99]"
        @click="emit('change-settings')"
      >
        變更設定
      </button>
    </section>
  </div>
</template>
