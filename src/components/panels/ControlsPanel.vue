<script setup>
import StickIndicator from '@/components/ui/StickIndicator.vue'

defineProps({
  input: Object,
  settings: Object,
  controlSource: {
    type: String,
    default: 'keyboard',
  },
})
</script>

<template>
  <section
    class="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
  >
    <div
      class="mb-4 flex items-center justify-between gap-3"
    >
      <div>
        <p
          class="text-xs uppercase tracking-[0.2em] text-white/40"
        >
          Mode 2
        </p>

        <h2 class="mt-1 font-semibold">
          控制輸入
        </h2>
      </div>

      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2">
          <span class="text-[10px] uppercase tracking-[0.14em] text-white/30">
            Input
          </span>

                  <span
                    class="rounded-full border px-2.5 py-1 text-[10px] font-semibold"
                    :class="
              controlSource === 'gamepad'
                ? 'border-lime-300/20 bg-lime-300/10 text-lime-200'
                : 'border-white/10 bg-white/5 text-white/45'
            "
                  >
            {{
                      controlSource === 'gamepad'
                        ? '🎮 LiteRadio'
                        : '⌨️ Keyboard'
                    }}
          </span>
        </div>

        <label
          class="flex items-center gap-2 text-xs text-white/55"
        >
          <input
            v-model="settings.showHeadingArrow"
            type="checkbox"
            class="accent-lime-300"
          >

          機頭箭頭
        </label>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <StickIndicator
        title="左桿"
        :x="-input.yaw"
        :y="input.throttle * 2 - 1"
        x-label="Yaw"
        y-label="Throttle"
      />

      <StickIndicator
        title="右桿"
        :x="input.roll"
        :y="input.pitch"
        x-label="Roll"
        y-label="Pitch"
      />
    </div>

    <div
      class="mt-4 grid grid-cols-2 gap-2 text-xs text-white/55"
    >
      <!-- Gamepad / LiteRadio -->
      <template v-if="controlSource === 'gamepad'">
        <div class="rounded-xl bg-black/20 p-3">
          <strong class="text-white">
            左桿 ↑ / ↓
          </strong>
          <br>
          Throttle
        </div>

        <div class="rounded-xl bg-black/20 p-3">
          <strong class="text-white">
            左桿 ← / →
          </strong>
          <br>
          Yaw

          <span
            v-if="
          settings.trainingMode === 'randomHeading'
        "
          >
        （本模式鎖定）
      </span>
        </div>

        <div class="rounded-xl bg-black/20 p-3">
          <strong class="text-white">
            右桿 ↑ / ↓
          </strong>
          <br>
          Pitch
        </div>

        <div class="rounded-xl bg-black/20 p-3">
          <strong class="text-white">
            右桿 ← / →
          </strong>
          <br>
          Roll
        </div>
      </template>

      <!-- Keyboard -->
      <template v-else>
        <div class="rounded-xl bg-black/20 p-3">
          <strong class="text-white">
            W / S
          </strong>
          <br>
          Throttle
        </div>

        <div class="rounded-xl bg-black/20 p-3">
          <strong class="text-white">
            A / D
          </strong>
          <br>
          Yaw

          <span
            v-if="
          settings.trainingMode === 'randomHeading'
        "
          >
        （本模式鎖定）
      </span>
        </div>

        <div class="rounded-xl bg-black/20 p-3">
          <strong class="text-white">
            ↑ / ↓
          </strong>
          <br>
          Pitch
        </div>

        <div class="rounded-xl bg-black/20 p-3">
          <strong class="text-white">
            ← / →
          </strong>
          <br>
          Roll
        </div>
      </template>
    </div>
  </section>
</template>