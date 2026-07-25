<script setup>
import { ref } from 'vue'
import GameCanvas from '@/components/GameCanvas.vue'
import ControlsPanel from '@/components/panels/ControlsPanel.vue'
import HelpPanel from '@/components/panels/HelpPanel.vue'
import TelemetryPanel from '@/components/panels/TelemetryPanel.vue'
import TopBar from '@/components/ui/TopBar.vue'
import { useGameStore } from '@/stores/gameStore.js'
import { useSettingsStore } from '@/stores/settingsStore.js'

const settings = useSettingsStore()
const game = useGameStore()
const input = ref({ throttle: 0, yaw: 0, pitch: 0, roll: 0 })
const actions = ref({ reset: () => {}, togglePause: () => {} })

function receiveInput(source) {
  input.value = source
}

function registerActions(nextActions) {
  actions.value = nextActions
}
</script>

<template>
  <main class="min-h-screen bg-[#090b10] text-white">
    <div class="mx-auto flex min-h-screen max-w-[1800px] flex-col p-3 lg:p-5">
      <TopBar :settings="settings" :paused="game.paused.value" @toggle-pause="actions.togglePause" @reset="actions.reset" @toggle-help="settings.showHelp = !settings.showHelp" />
      <section class="grid min-h-0 flex-1 gap-3 xl:grid-cols-[minmax(0,1fr)_320px]">
        <GameCanvas :settings="settings" :game="game" @input-ready="receiveInput" @register-actions="registerActions" />
        <aside class="flex flex-col gap-3">
          <TelemetryPanel :telemetry="game.telemetry" :wind-mode="settings.windMode" />
          <ControlsPanel :input="input" :settings="settings" />
          <section class="rounded-2xl border border-lime-300/15 bg-lime-300/[0.04] p-4 text-sm text-white/65">
            <p class="font-semibold text-lime-200">v0.2 Foundation</p>
            <p class="mt-2 leading-6">相機、物理、風、邊界與計分已拆成獨立系統。後續加入中風、陣風、Lesson 與飛行分析時，不必再把所有邏輯塞進同一支 Vue 檔案。</p>
          </section>
        </aside>
      </section>
    </div>
    <HelpPanel v-if="settings.showHelp" @close="settings.showHelp = false" />
  </main>
</template>
