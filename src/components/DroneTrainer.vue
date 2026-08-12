<script setup>
import { ref } from 'vue'
import GameCanvas from '@/components/GameCanvas.vue'
import ControlsPanel from '@/components/panels/ControlsPanel.vue'
import ControllerDebugPanel from '@/components/panels/ControllerDebugPanel.vue'
import HelpPanel from '@/components/panels/HelpPanel.vue'
import TelemetryPanel from '@/components/panels/TelemetryPanel.vue'
import TopBar from '@/components/ui/TopBar.vue'
import { useGameStore } from '@/stores/gameStore.js'
import { useSettingsStore } from '@/stores/settingsStore.js'

const settings = useSettingsStore()
const game = useGameStore()
const input = ref({ throttle: 0, yaw: 0, pitch: 0, roll: 0 })
const actions = ref({ reset: () => {}, togglePause: () => {} })
const showControllerDebug = ref(false)

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
      <TopBar :settings="settings" :paused="game.paused.value" @toggle-pause="actions.togglePause" @reset="actions.reset" @toggle-help="settings.showHelp = !settings.showHelp" @toggle-controller-debug="showControllerDebug = !showControllerDebug" />
      <section class="grid min-h-0 flex-1 gap-3 xl:grid-cols-[minmax(0,1fr)_320px]">
        <GameCanvas :settings="settings" :game="game" @input-ready="receiveInput" @register-actions="registerActions" />
        <aside class="flex flex-col gap-3">
          <ControllerDebugPanel v-if="showControllerDebug" @close="showControllerDebug = false" />
          <TelemetryPanel :telemetry="game.telemetry" :wind-mode="settings.windMode" />
          <ControlsPanel :input="input" :settings="settings" />
          <section v-if="settings.trainingMode === 'randomHeading'" class="rounded-2xl border border-lime-300/15 bg-lime-300/[0.04] p-4 text-sm text-white/65">
            <p class="font-semibold text-lime-200">v0.3 Random Heading</p>
            <p class="mt-2 leading-6">機頭會在北、東、南、西之間隨機切換。請保持機頭不動，只用 Pitch／Roll 前往指定的世界方向，完成後立即進入下一題。</p>
          </section>
        </aside>
      </section>
    </div>
    <HelpPanel v-if="settings.showHelp" @close="settings.showHelp = false" />
  </main>
</template>
