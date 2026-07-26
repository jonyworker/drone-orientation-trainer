<script setup>
import {
  computed,
  ref,
  watch,
} from 'vue'

const props = defineProps({
  heading: {
    type: Number,
    default: 0,
  },
})

/**
 * 將任何角度正規化為 0～359.999...
 *
 * 例如：
 * - -90  → 270
 * - 360  → 0
 * - 450  → 90
 */
function normalizeHeading(value) {
  const heading = Number(value)

  if (!Number.isFinite(heading)) {
    return 0
  }

  return (
    heading % 360
    + 360
  ) % 360
}

/**
 * 顯示於中心的方位角。
 */
const normalizedHeading = computed(() =>
  normalizeHeading(props.heading),
)

/**
 * 顯示主要方位名稱。
 */
const headingLabel = computed(() => {
  const heading = normalizedHeading.value

  if (heading >= 337.5 || heading < 22.5) {
    return 'N'
  }

  if (heading < 67.5) {
    return 'NE'
  }

  if (heading < 112.5) {
    return 'E'
  }

  if (heading < 157.5) {
    return 'SE'
  }

  if (heading < 202.5) {
    return 'S'
  }

  if (heading < 247.5) {
    return 'SW'
  }

  if (heading < 292.5) {
    return 'W'
  }

  return 'NW'
})

/**
 * 實際套用到 CSS transform 的連續角度。
 *
 * 這個值不限制在 0～360，藉此避免：
 *
 * 350° → 0°
 *
 * 被 CSS 誤判成反方向旋轉 350°。
 */
const needleRotation = ref(
  normalizeHeading(props.heading),
)

watch(
  () => props.heading,
  (nextHeading) => {
    const nextNormalized =
      normalizeHeading(nextHeading)

    const currentNormalized =
      normalizeHeading(
        needleRotation.value,
      )

    /*
     * 先算出一般角度差。
     */
    let difference =
      nextNormalized
      - currentNormalized

    /*
     * 將角度差壓縮至 -180～180，
     * 讓指針永遠走較短的一側。
     *
     * 0° → 270° 會變成 -90°
     * 350° → 10° 會變成 +20°
     */
    if (difference > 180) {
      difference -= 360
    } else if (difference < -180) {
      difference += 360
    }

    needleRotation.value += difference
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div
    class="pointer-events-none flex flex-col items-center"
  >
    <div
      class="relative size-32 rounded-full border border-white/15 bg-black/60 shadow-2xl backdrop-blur-md"
    >
      <!-- 內圈 -->
      <div
        class="absolute inset-3 rounded-full border border-white/10"
      />

      <!-- 十字刻度 -->
      <div
        class="absolute left-1/2 top-3 h-2 w-px -translate-x-1/2 bg-white/50"
      />

      <div
        class="absolute bottom-3 left-1/2 h-2 w-px -translate-x-1/2 bg-white/30"
      />

      <div
        class="absolute left-3 top-1/2 h-px w-2 -translate-y-1/2 bg-white/30"
      />

      <div
        class="absolute right-3 top-1/2 h-px w-2 -translate-y-1/2 bg-white/30"
      />

      <!-- 世界方向 -->
      <span
        class="absolute left-1/2 top-2 -translate-x-1/2 text-xs font-bold text-lime-300"
      >
        N
      </span>

      <span
        class="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-white/70"
      >
        E
      </span>

      <span
        class="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold text-white/50"
      >
        S
      </span>

      <span
        class="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-white/70"
      >
        W
      </span>

      <!-- 機頭方向箭頭 -->
      <div
        class="absolute inset-0 origin-center transition-transform duration-100 ease-linear"
        :style="{
          transform: `rotate(${needleRotation}deg)`,
        }"
      >
        <svg
          viewBox="0 0 128 128"
          class="size-full"
        >
          <path
            d="M64 29
               L57 44
               L64 40
               L71 44
               Z"
            fill="#bef264"
          />
        </svg>
      </div>

      <!-- 中心 -->
      <div
        class="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/10 bg-black/80"
      >
        <span class="text-sm font-bold text-white">
          {{ normalizedHeading.toFixed(0) }}°
        </span>

        <span class="text-[9px] text-white/50">
          {{ headingLabel }}
        </span>
      </div>
    </div>

    <div
      class="mt-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/50 backdrop-blur"
    >
      Drone Heading
    </div>
  </div>
</template>