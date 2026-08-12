<script setup>
import * as THREE from 'three'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import FlightHUD from '@/components/hud/FlightHUD.vue'
import CompassHUD from '@/components/hud/CompassHUD.vue'
import ChallengeHUD from '@/components/challenge/ChallengeHUD.vue'
import { FEATURES } from '@/config/features.js'
import { challengeDefinitions } from '@/challenges/challengeDefinitions.js'
import { ChallengeSystem } from '@/systems/ChallengeSystem.js'
import { useKeyboardControls } from '@/composables/useKeyboardControls.js'
import { useGamepadControls } from '@/composables/useGamepadControls.js'
import { CameraController } from '@/core/CameraController.js'
import { DronePhysics } from '@/core/DronePhysics.js'
import {
  cameraBearingOptions,
  cameraHeightOptions,
} from '@/stores/settingsStore.js'
import { BoundarySystem } from '@/systems/BoundarySystem.js'
import { ScoreSystem } from '@/systems/ScoreSystem.js'
import { WindSystem } from '@/systems/WindSystem.js'
import { createPositionRing } from '@/three/createPositionRing.js'
import { createDrone } from '@/three/createDrone.js'
import { createChallengeTarget } from '@/three/createChallengeTarget.js'
import { createScene } from '@/three/createScene.js'
import { createTrainingGround } from '@/three/createTrainingGround.js'

const props = defineProps({
  settings: Object,
  game: Object,
})

const emit = defineEmits([
  'input-ready',
  'register-actions',
])

const canvasHost = ref(null)

const selectedChallenge =
  challengeDefinitions[0]

const activeChallenge = ref(null)
const compassHeading = ref(0)

const isChallengeMode = computed(
  () => props.settings.trainingMode === 'randomHeading',
)

let renderer
let scene
let camera
let drone
let positionRing
let challengeTarget
let physics
let cameraController
let resizeObserver
let animationFrame
let lastTimestamp = 0

const zoneSize = 12

const windSystem = new WindSystem()
const boundarySystem = new BoundarySystem(zoneSize)
const scoreSystem = new ScoreSystem(zoneSize / 2)
const challengeSystem = new ChallengeSystem()

const {
  input: keyboardInput,
  clearInput: clearKeyboardInput,
} = useKeyboardControls({
  onPause: togglePause,
  onReset: resetSimulation,
  onHelp: () => {
    props.settings.showHelp = !props.settings.showHelp
  },
})

const {
  input: gamepadInput,
  connected: gamepadConnected,
} = useGamepadControls()

function getActiveInput() {
  return gamepadConnected.value
    ? gamepadInput
    : keyboardInput
}

function selected(options, value) {
  return (
    options.find((option) => option.value === value)
    ?? options[0]
  )
}

function modeYaw(mode) {
  if (mode === 'away') return 0
  if (mode === 'toward') return Math.PI
  if (mode === 'left') return -Math.PI / 2
  if (mode === 'right') return Math.PI / 2

  if (mode === 'random') {
    return Math.random() * Math.PI * 2 - Math.PI
  }

  return physics?.state.yaw ?? 0
}

function initScene() {
  scene = createScene()

  camera = new THREE.PerspectiveCamera(
    48,
    1,
    0.1,
    100,
  )

  renderer = new THREE.WebGLRenderer({
    antialias: true,
  })

  renderer.domElement.style.width = '100%'
  renderer.domElement.style.height = '100%'
  renderer.domElement.style.display = 'block'

  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2),
  )

  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.outputColorSpace = THREE.SRGBColorSpace

  canvasHost.value.appendChild(
    renderer.domElement,
  )

  createTrainingGround(scene, zoneSize)

  // 注意：這裡不要再寫 const drone
  drone = createDrone()
  scene.add(drone)

  // 注意：這裡不要再寫 const positionRing
  positionRing = createPositionRing()
  scene.add(positionRing)

  challengeTarget = createChallengeTarget()
  scene.add(challengeTarget)

  physics = new DronePhysics(drone)
  cameraController = new CameraController(camera)

  applyCamera(true)
  resetSimulation()
  resizeRenderer()

  resizeObserver = new ResizeObserver(
    resizeRenderer,
  )

  resizeObserver.observe(
    canvasHost.value,
  )
}

function applyCamera(immediate = false) {
  if (!cameraController) return

  cameraController.setPreset(
    selected(
      cameraHeightOptions,
      props.settings.cameraHeight,
    ),
    selected(
      cameraBearingOptions,
      props.settings.cameraBearing,
    ),
    drone?.position
    ?? new THREE.Vector3(0, 1.5, 0),
    immediate,
  )
}

function resizeRenderer() {
  if (
    !renderer
    || !camera
    || !canvasHost.value
  ) {
    return
  }

  const {
    clientWidth: width,
    clientHeight: height,
  } = canvasHost.value

  if (!width || !height) return

  renderer.setSize(width, height)

  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function resetSimulation() {
  if (!physics) return

  clearKeyboardInput()

  props.game.paused.value = false

  let initialYaw = modeYaw(
    props.settings.trainingMode,
  )

  if (FEATURES.challenge && isChallengeMode.value) {
    activeChallenge.value =
      challengeSystem.start(
        selectedChallenge,
        new THREE.Vector3(0, 1.5, 0),
      )

    initialYaw = challengeSystem.getHeadingRadians()
  }

  physics.reset(initialYaw)

  compassHeading.value =
    (
      THREE.MathUtils.radToDeg(initialYaw)
      + 360
    ) % 360

  windSystem.reset(
    props.settings.windMode,
  )

  boundarySystem.reset()

  if (FEATURES.score) {
    scoreSystem.reset()
  }

  if (!FEATURES.challenge || !isChallengeMode.value) {
    challengeSystem.reset()
    activeChallenge.value = null
  }

  updateChallengeTarget()

  Object.assign(
    props.game.telemetry,
    {
      altitude: 1.5,
      speed: 0,
      yaw: 0,
      distance: 0,
      score: 0,
      time: 0,
      boundaryCount: 0,
      outside: false,
      windSpeed: 0,
      windDirection: 0,
    },
  )

  updatePositionRing()
  applyCamera(true)
}

function togglePause() {
  props.game.paused.value =
    !props.game.paused.value

  clearKeyboardInput()
}

function updatePositionRing() {
  if (!drone || !positionRing) return

  positionRing.position.set(
    drone.position.x,
    0,
    drone.position.z,
  )
}

function updateChallengeTarget() {
  if (!challengeTarget) return

  if (
    !FEATURES.challenge
    || !isChallengeMode.value
    || !activeChallenge.value?.active
  ) {
    challengeTarget.visible = false
    return
  }

  const target = challengeSystem.getTargetPosition()
  challengeTarget.position.set(target.x, 0, target.z)
  challengeTarget.visible = true
}

function advanceChallengeRound() {
  physics.reset(0)

  activeChallenge.value = challengeSystem.nextRound(
    drone.position,
  )

  const yaw = challengeSystem.getHeadingRadians()
  physics.reset(yaw)

  compassHeading.value = (
    THREE.MathUtils.radToDeg(yaw) + 360
  ) % 360

  updateChallengeTarget()
  updatePositionRing()
}

function animate(timestamp) {
  animationFrame =
    requestAnimationFrame(animate)

  const delta = Math.min(
    (timestamp - lastTimestamp) / 1000 || 0,
    0.033,
  )

  lastTimestamp = timestamp

  if (!props.game.paused.value) {
    const telemetry =
      props.game.telemetry

    telemetry.time += delta

    const wind = windSystem.update(
      delta,
      telemetry.time,
    )

    const activeInput = getActiveInput()

    const flightInput =
      FEATURES.challenge && isChallengeMode.value
        ? {
          throttle: activeInput.throttle,
          yaw: 0,
          pitch: activeInput.pitch,
          roll: activeInput.roll,
        }
        : activeInput

    const flight = physics.update(
      delta,
      flightInput,
      wind.acceleration,
      FEATURES.challenge && isChallengeMode.value
        ? 'free'
        : props.settings.trainingMode,
    )

    compassHeading.value =
      (
        Number(flight.yaw ?? 0)
        + 360
      ) % 360

    const boundary =
      boundarySystem.update(
        drone.position,
      )

    if (FEATURES.challenge && isChallengeMode.value) {
      activeChallenge.value =
        challengeSystem.update(
          delta,
          drone.position,
        )

      if (challengeSystem.shouldAdvance()) {
        advanceChallengeRound()
      }
    }

    Object.assign(
      telemetry,
      flight,
      {
        outside: boundary.outside,
        boundaryCount: boundary.count,
        windSpeed: wind.speed,
        windDirection: wind.direction,
      },
    )

    telemetry.score = FEATURES.score
      ? scoreSystem.update(
        delta,
        telemetry.distance,
        telemetry.outside,
      )
      : 0

    cameraController.update(
      delta,
      drone.position,
    )
  }

  // 即使暫停，也讓 Ring 維持正確位置
  updatePositionRing()
  updateChallengeTarget()

  renderer.render(
    scene,
    camera,
  )

}

function dispose() {
  cancelAnimationFrame(animationFrame)

  resizeObserver?.disconnect()

  scene?.traverse((object) => {
    object.geometry?.dispose()

    const materials = object.material
      ? (
        Array.isArray(object.material)
          ? object.material
          : [object.material]
      )
      : []

    materials.forEach((material) => {
      material.dispose()
    })
  })

  renderer?.dispose()
  renderer?.domElement?.remove()
}

watch(
  () => [
    props.settings.cameraHeight,
    props.settings.cameraBearing,
  ],
  () => applyCamera(false),
)

watch(
  () => props.settings.windMode,
  resetSimulation,
)

watch(
  () => props.settings.trainingMode,
  resetSimulation,
)

watch(
  () => props.settings.showHeadingArrow,
  (visible) => {
    if (drone?.userData.headingArrow) {
      drone.userData.headingArrow.visible =
        visible
    }
  },
)

onMounted(async () => {
  await nextTick()

  initScene()

  emit(
    'input-ready',
    keyboardInput,
  )

  emit(
    'register-actions',
    {
      reset: resetSimulation,
      togglePause,
    },
  )

  animationFrame =
    requestAnimationFrame(animate)
})

onBeforeUnmount(dispose)
</script>

<template>
  <div
    class="relative min-h-[580px] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-black/40"
  >
    <!-- Three.js 畫面 -->
    <div
      ref="canvasHost"
      class="absolute inset-0"
    />

    <!-- 飛行資訊 -->
    <FlightHUD
      :telemetry="game.telemetry"
      :status-text="game.statusText.value"
      :wind-mode="settings.windMode"
      :camera-bearing="selected(
        cameraBearingOptions,
        settings.cameraBearing,
      ).degrees"
    />

    <!-- 挑戰資訊 -->
    <ChallengeHUD
      v-if="FEATURES.challenge && isChallengeMode"
      :challenge="activeChallenge"
    />

    <!--
      右上角 HUD 區域

      方位針永遠排第一順位。
      風向資訊若啟用，應排列在方位針下方。
    -->
    <div
      class="pointer-events-none absolute right-4 top-4 z-30 flex flex-col items-end gap-3"
    >
      <CompassHUD
        :heading="compassHeading"
      />
    </div>

    <!-- 鏡頭說明 -->
    <div
      class="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-white/60 backdrop-blur"
    >
      鏡頭只跟位置，不跟機頭旋轉
    </div>
  </div>
</template>