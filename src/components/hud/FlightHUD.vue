<script setup>
import { computed } from 'vue'
import { FEATURES } from '@/config/features.js'

const props = defineProps({
  telemetry: {
    type: Object,
    required: true,
  },
  statusText: {
    type: String,
    default: '',
  },
  windMode: {
    type: String,
    default: 'none',
  },
  cameraBearing: {
    type: [Number, String],
    default: 0,
  },
})

const windVisible = computed(() => props.windMode !== 'none')

const cameraBearingDegrees = computed(() => {
  return Number(props.cameraBearing) || 0
})

const windScreenDegrees = computed(() => {
  const worldDirection = Number(props.telemetry.windDirection) || 0

  // 箭頭代表風在目前鏡頭畫面中造成的漂移方向。
  return normalizeDegrees(
    worldDirection + cameraBearingDegrees.value,
  )
})

const windDirectionLabel = computed(() => {
  const degrees = normalizeDegrees(
    Number(props.telemetry.windDirection) || 0,
  )

  if (degrees >= 337.5 || degrees < 22.5) return '吹向北方'
  if (degrees < 67.5) return '吹向東北'
  if (degrees < 112.5) return '吹向東方'
  if (degrees < 157.5) return '吹向東南'
  if (degrees < 202.5) return '吹向南方'
  if (degrees < 247.5) return '吹向西南'
  if (degrees < 292.5) return '吹向西方'
  return '吹向西北'
})

function normalizeDegrees(value) {
  return ((value % 360) + 360) % 360
}

function format(value, digits = 1) {
  const number = Number(value)
  return Number.isFinite(number) ? number.toFixed(digits) : '0.0'
}
</script>

<template>
  <div class="pointer-events-none absolute inset-0 z-10 p-4 text-white">
    <div class="flex items-start justify-between gap-4">
      <div class="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur">
        <p class="text-[10px] uppercase tracking-[0.2em] text-white/45">Flight status</p>
        <p class="mt-1 text-sm font-medium">{{ statusText }}</p>
      </div>

      <div
        v-if="windVisible"
        class="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/45 px-3 py-2.5 backdrop-blur"
      >
        <div class="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5">
          <!-- 箭頭代表畫面中無人機會被風吹去的方向。 -->
          <svg
            class="h-6 w-6 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :style="{ transform: `rotate(${windScreenDegrees}deg)` }"
          >
            <path
              d="M12 20V5M12 5L7.5 9.5M12 5L16.5 9.5"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div>
          <p class="text-[10px] uppercase tracking-[0.18em] text-white/45">Wind drift</p>
          <p class="mt-0.5 text-sm font-semibold">
            {{ format(telemetry.windSpeed, 2) }}
          </p>
          <p class="text-[11px] text-white/50">{{ windDirectionLabel }}</p>
        </div>
      </div>
    </div>

    <div class="absolute bottom-4 left-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
      <div class="rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur">
        <p class="text-[9px] uppercase tracking-[0.16em] text-white/40">Altitude</p>
        <p class="mt-1 text-sm font-semibold">{{ format(telemetry.altitude) }} m</p>
      </div>

      <div class="rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur">
        <p class="text-[9px] uppercase tracking-[0.16em] text-white/40">Speed</p>
        <p class="mt-1 text-sm font-semibold">{{ format(telemetry.speed) }} m/s</p>
      </div>

      <div class="rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur">
        <p class="text-[9px] uppercase tracking-[0.16em] text-white/40">Distance</p>
        <p class="mt-1 text-sm font-semibold">{{ format(telemetry.distance) }} m</p>
      </div>

      <div v-if="FEATURES.score">
        <div class="rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur">
          <p class="text-[9px] uppercase tracking-[0.16em] text-white/40">Score</p>
          <p class="mt-1 text-sm font-semibold">{{ Math.round(Number(telemetry.score) || 0) }}</p>
        </div>
      </div>

    </div>
  </div>
</template>
