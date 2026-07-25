<script setup>
import { directionArrow } from '@/utils/angles.js'
defineProps({ telemetry: Object, windMode: String })
</script>

<template>
  <section class="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
    <div class="mb-4 flex items-center justify-between">
      <div><p class="text-xs uppercase tracking-[0.2em] text-white/40">Telemetry</p><h2 class="mt-1 font-semibold">飛行資料</h2></div>
      <span class="rounded-full px-2.5 py-1 text-xs" :class="telemetry.outside ? 'bg-red-500/15 text-red-300' : 'bg-lime-300/10 text-lime-300'">{{ telemetry.outside ? 'OUT' : 'IN ZONE' }}</span>
    </div>
    <dl class="grid grid-cols-2 gap-2">
      <div v-for="item in [
        ['高度', `${telemetry.altitude.toFixed(2)} m`],
        ['速度', `${telemetry.speed.toFixed(2)} m/s`],
        ['機頭', `${telemetry.yaw.toFixed(0)}°`],
        ['離中心', `${telemetry.distance.toFixed(2)} m`],
      ]" :key="item[0]" class="rounded-xl bg-black/25 p-3">
        <dt class="text-xs text-white/45">{{ item[0] }}</dt><dd class="mt-1 text-lg font-semibold tabular-nums">{{ item[1] }}</dd>
      </div>
      <div class="col-span-2 rounded-xl bg-black/25 p-3">
        <dt class="text-xs text-white/45">環境風</dt>
        <dd class="mt-1 flex items-baseline justify-between gap-3"><span class="text-lg font-semibold">{{ windMode === 'none' ? '無風' : '微風' }}</span><span class="text-sm tabular-nums text-cyan-200">{{ windMode === 'none' ? '0.0 m/s' : `${directionArrow(telemetry.windDirection)} ${telemetry.windSpeed.toFixed(1)} m/s · ${telemetry.windDirection.toFixed(0)}°` }}</span></dd>
      </div>
    </dl>
    <div class="mt-3 flex items-center justify-between rounded-xl border border-white/10 px-3 py-2 text-sm"><span class="text-white/55">超界次數</span><strong class="tabular-nums" :class="telemetry.boundaryCount ? 'text-red-300' : 'text-white'">{{ telemetry.boundaryCount }}</strong></div>
  </section>
</template>
