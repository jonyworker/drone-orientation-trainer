<script setup>
import * as THREE from 'three'
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from 'vue'

import FlightHUD from '@/components/hud/FlightHUD.vue'
import CompassHUD from '@/components/hud/CompassHUD.vue'
import ChallengeHUD from '@/components/challenge/ChallengeHUD.vue'
import StickTrainingHUD from '@/components/training/StickTrainingHUD.vue'
import StabilityTrainingHUD from '@/components/training/StabilityTrainingHUD.vue'

import { FEATURES } from '@/config/features.js'

import {
  CARDINAL_HEADINGS,
  challengeDefinitions,
} from '@/challenges/challengeDefinitions.js'

import { ChallengeSystem } from '@/systems/ChallengeSystem.js'
import { useKeyboardControls } from '@/composables/useKeyboardControls.js'
import { useGamepadControls } from '@/composables/useGamepadControls.js'
import { useStickTraining } from '@/composables/useStickTraining.js'

import { CameraController } from '@/core/CameraController.js'
import { DronePhysics } from '@/core/DronePhysics.js'

import {
  stabilityWindOptions,
  stabilityZoneOptions,
} from '@/stores/settingsStore.js'

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
import { createStabilityZone } from '@/three/createStabilityZone.js'

const props = defineProps({
  settings: Object,
  game: Object,

  controllerCalibrating: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([
  'input-ready',
  'control-source-ready',
  'register-actions',
])

const canvasHost = ref(null)

const selectedChallenge =
  challengeDefinitions[0]

const activeChallenge = ref(null)
const compassHeading = ref(0)

const stabilityHeading = ref(null)
const stabilityOutside = ref(false)
const stabilityDistance = ref(0)

const stabilityInsideTime = ref(0)
const stabilityOutsideTime = ref(0)

const STABILITY_DURATION = 10
const STABILITY_READY_DURATION = 3

const stabilityPhase = ref('ready')
const stabilityElapsedTime = ref(0)
const stabilityReadyElapsed = ref(0)

const stabilityRoundWindLevel = ref('normal')
const stabilityRoundZoneSize = ref('normal')

const stabilityReadyCount = computed(() =>
  Math.max(
    1,
    Math.ceil(
      STABILITY_READY_DURATION
      - stabilityReadyElapsed.value,
    ),
  ),
)

const stabilityRemainingTime = computed(() =>
  Math.max(
    0,
    STABILITY_DURATION
    - stabilityElapsedTime.value,
  ),
)

const isChallengeMode = computed(
  () =>
    props.settings.trainingMode
    === 'randomHeading',
)

const isStickTraining = computed(() =>
  props.settings.trainingMode
    .startsWith('stickTraining'),
)

const isStabilityTraining = computed(() =>
  props.settings.trainingMode
    .startsWith('stabilityTraining'),
)

const stickTrainingLevel = computed(() => {
  if (
    props.settings.trainingMode
    === 'stickTraining2'
  ) {
    return 2
  }

  return 1
})

let renderer
let scene
let camera
let drone
let positionRing
let stabilityZone
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
    props.settings.showHelp =
      !props.settings.showHelp
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

const controlSource = computed(() =>
  gamepadConnected.value
    ? 'gamepad'
    : 'keyboard',
)

const stabilityTimeLabel = computed(() =>
  formatStabilityTime(
    stabilityRemainingTime.value,
  ),
)

const stabilityResult = computed(() => {
  const total =
    stabilityInsideTime.value
    + stabilityOutsideTime.value

  const stability =
    total > 0
      ? (
      stabilityInsideTime.value
      / total
    ) * 100
      : 0

  return {
    heading:
    stabilityHeading.value,

    total,

    inside:
    stabilityInsideTime.value,

    outside:
    stabilityOutsideTime.value,

    stability,
  }
})

const stabilityZoneRadius = computed(() => {
  if (
    props.settings.trainingMode
    !== 'stabilityTraining2'
  ) {
    return 2.5
  }

  const zoneSize =
    stabilityPhase.value === 'setup'
      ? props.settings.stabilityZoneSize
      : stabilityRoundZoneSize.value

  return (
    stabilityZoneOptions.find(
      option =>
        option.value === zoneSize,
    )?.radius
    ?? 2.5
  )
})

const stabilityWindMultiplier = computed(() => {
  if (
    props.settings.trainingMode
    !== 'stabilityTraining2'
  ) {
    return 1
  }

  const windLevel =
    stabilityPhase.value === 'setup'
      ? props.settings.stabilityWindLevel
      : stabilityRoundWindLevel.value

  return (
    stabilityWindOptions.find(
      option =>
        option.value === windLevel,
    )?.multiplier
    ?? 1
  )
})

const stabilityWindLabel = computed(() => {
  if (
    props.settings.trainingMode
    !== 'stabilityTraining2'
  ) {
    return ''
  }

  return (
    stabilityWindOptions.find(
      option =>
        option.value
        === stabilityRoundWindLevel.value,
    )?.label
    ?? '-'
  )
})

const stabilityZoneLabel = computed(() => {
  if (
    props.settings.trainingMode
    !== 'stabilityTraining2'
  ) {
    return ''
  }

  const option =
    stabilityZoneOptions.find(
      item =>
        item.value
        === stabilityRoundZoneSize.value,
    )

  if (!option) {
    return '-'
  }

  return `${option.label} · R ${option.radius.toFixed(1)} m`
})

const stabilityTotalLabel =
  computed(() =>
    formatStabilityResultTime(
      stabilityResult.value.total,
    ),
  )

const stabilityInsideLabel =
  computed(() =>
    formatStabilityResultTime(
      stabilityResult.value.inside,
    ),
  )

const stabilityOutsideLabel =
  computed(() =>
    formatStabilityResultTime(
      stabilityResult.value.outside,
    ),
  )

const stabilityPercentLabel =
  computed(() =>
    `${stabilityResult.value.stability.toFixed(1)}%`,
  )

const stabilityHeadingLabel =
  computed(() =>
    getStabilityHeadingLabel(),
  )

const visualInput = reactive({
  throttle: 0.5,
  yaw: 0,
  pitch: 0,
  roll: 0,
})

const {
  currentExercise,

  completed:
    stickTrainingCompleted,

  round:
    stickTrainingRound,

  waitingForStartCenter:
    stickTrainingWaitingForStartCenter,

  waitingForCenter:
    stickTrainingWaitingForCenter,

  waitingForNextRound:
    stickTrainingWaitingForNextRound,

  errorType:
    stickTrainingErrorType,

  errorMessage:
    stickTrainingErrorMessage,

  successMin:
    stickTrainingSuccessMin,

  successMax:
    stickTrainingSuccessMax,

  successHoldProgress:
    stickTrainingSuccessHoldProgress,

  start:
    startStickTraining,

  stop:
    stopStickTraining,

  update:
    updateStickTraining,
} = useStickTraining(
  stickTrainingLevel,
)

function getStabilityHeadingLabel() {
  const heading =
    stabilityHeading.value

  if (!heading) {
    return '-'
  }

  const degrees =
    (
      THREE.MathUtils.radToDeg(
        heading.radians,
      )
      + 360
    ) % 360

  if (degrees === 0) {
    return 'NORTH ↑'
  }

  if (degrees === 90) {
    return 'EAST →'
  }

  if (degrees === 180) {
    return 'SOUTH ↓'
  }

  if (degrees === 270) {
    return 'WEST ←'
  }

  return `${Math.round(degrees)}°`
}

function selected(
  options,
  value,
) {
  return (
    options.find(
      (option) =>
        option.value === value,
    )
    ?? options[0]
  )
}

function randomCardinalHeading() {
  return CARDINAL_HEADINGS[
    Math.floor(
      Math.random()
      * CARDINAL_HEADINGS.length,
    )
    ]
}

function modeYaw(mode) {
  if (mode === 'away') {
    return 0
  }

  if (mode === 'toward') {
    return Math.PI
  }

  if (mode === 'left') {
    return -Math.PI / 2
  }

  if (mode === 'right') {
    return Math.PI / 2
  }

  if (mode === 'random') {
    return (
      Math.random()
      * Math.PI
      * 2
      - Math.PI
    )
  }

  return physics?.state.yaw ?? 0
}

function initScene() {
  scene =
    createScene()

  camera =
    new THREE.PerspectiveCamera(
      48,
      1,
      0.1,
      100,
    )

  renderer =
    new THREE.WebGLRenderer({
      antialias: true,
    })

  renderer.domElement.style.width =
    '100%'

  renderer.domElement.style.height =
    '100%'

  renderer.domElement.style.display =
    'block'

  renderer.setPixelRatio(
    Math.min(
      window.devicePixelRatio,
      2,
    ),
  )

  renderer.shadowMap.enabled =
    true

  renderer.shadowMap.type =
    THREE.PCFSoftShadowMap

  renderer.outputColorSpace =
    THREE.SRGBColorSpace

  canvasHost.value.appendChild(
    renderer.domElement,
  )

  createTrainingGround(
    scene,
    zoneSize,
  )

  drone =
    createDrone()

  scene.add(
    drone,
  )

  positionRing =
    createPositionRing()

  scene.add(
    positionRing,
  )

  stabilityZone =
    createStabilityZone(
      stabilityZoneRadius.value,
    )

  stabilityZone.position.set(
    0,
    0,
    0,
  )

  scene.add(
    stabilityZone,
  )

  challengeTarget =
    createChallengeTarget()

  scene.add(
    challengeTarget,
  )

  physics =
    new DronePhysics(
      drone,
    )

  cameraController =
    new CameraController(
      camera,
    )

  applyCamera(true)

  resetSimulation()

  resizeRenderer()

  resizeObserver =
    new ResizeObserver(
      resizeRenderer,
    )

  resizeObserver.observe(
    canvasHost.value,
  )
}

function updateStabilityBoundary() {
  if (
    !isStabilityTraining.value
    || !drone
  ) {
    stabilityOutside.value =
      false

    stabilityDistance.value =
      0

    return
  }

  const distance =
    Math.hypot(
      drone.position.x,
      drone.position.z,
    )

  stabilityDistance.value =
    distance

  stabilityOutside.value =
    distance
    > stabilityZoneRadius.value
}

function updateStabilityReady(delta) {
  if (
    !isStabilityTraining.value
    || stabilityPhase.value !== 'ready'
  ) {
    return
  }

  stabilityReadyElapsed.value +=
    delta

  if (
    stabilityReadyElapsed.value
    >= STABILITY_READY_DURATION
  ) {
    stabilityReadyElapsed.value =
      STABILITY_READY_DURATION

    stabilityPhase.value =
      'running'
  }
}

function updateStabilityScore(delta) {
  if (
    !isStabilityTraining.value
    || stabilityPhase.value
    !== 'running'
  ) {
    return
  }

  const remaining =
    STABILITY_DURATION
    - stabilityElapsedTime.value

  const countedDelta =
    Math.min(
      delta,
      Math.max(
        0,
        remaining,
      ),
    )

  if (countedDelta > 0) {
    if (
      stabilityOutside.value
    ) {
      stabilityOutsideTime.value +=
        countedDelta
    } else {
      stabilityInsideTime.value +=
        countedDelta
    }

    stabilityElapsedTime.value +=
      countedDelta
  }

  const finished =
    stabilityElapsedTime.value
    >= STABILITY_DURATION
    - 0.0001

  if (finished) {
    stabilityElapsedTime.value =
      STABILITY_DURATION

    const totalRecorded =
      stabilityInsideTime.value
      + stabilityOutsideTime.value

    const correction =
      STABILITY_DURATION
      - totalRecorded

    if (
      Math.abs(correction) > 0
    ) {
      if (
        stabilityOutside.value
      ) {
        stabilityOutsideTime.value +=
          correction
      } else {
        stabilityInsideTime.value +=
          correction
      }
    }

    stabilityPhase.value =
      'finished'

    physics?.stopMotion()
  }
}

function applyCamera(
  immediate = false,
) {
  if (!cameraController) {
    return
  }

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
    ?? new THREE.Vector3(
      0,
      1.5,
      0,
    ),

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
  } =
    canvasHost.value

  if (
    !width
    || !height
  ) {
    return
  }

  renderer.setSize(
    width,
    height,
  )

  camera.aspect =
    width / height

  camera.updateProjectionMatrix()
}

function resetSimulation() {
  if (!physics) {
    return
  }

  clearKeyboardInput()

  props.game.paused.value =
    false

  let initialYaw =
    modeYaw(
      props.settings.trainingMode,
    )

  if (
    isStabilityTraining.value
  ) {
    stabilityHeading.value =
      randomCardinalHeading()

    initialYaw =
      stabilityHeading.value
        .radians

    resetStabilityScore()
  }

  if (
    FEATURES.challenge
    && isChallengeMode.value
  ) {
    activeChallenge.value =
      challengeSystem.start(
        selectedChallenge,

        new THREE.Vector3(
          0,
          1.5,
          0,
        ),
      )

    initialYaw =
      challengeSystem
        .getHeadingRadians()
  }

  physics.reset(
    initialYaw,
  )

  compassHeading.value =
    (
      THREE.MathUtils.radToDeg(
        initialYaw,
      )
      + 360
    ) % 360

  const windMode =
    isStabilityTraining.value
      ? 'stability'
      : props.settings.windMode

  windSystem.reset(
    windMode,
  )

  boundarySystem.reset()

  if (FEATURES.score) {
    scoreSystem.reset()
  }

  if (
    !FEATURES.challenge
    || !isChallengeMode.value
  ) {
    challengeSystem.reset()

    activeChallenge.value =
      null
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
  updateStabilityZone()
  applyCamera(true)
}

function togglePause() {
  props.game.paused.value =
    !props.game.paused.value

  clearKeyboardInput()
}

function updateStabilityZone() {
  if (!stabilityZone) {
    return
  }

  stabilityZone.visible =
    isStabilityTraining.value

  const scale =
    stabilityZoneRadius.value
    / 2.5

  stabilityZone.scale.set(
    scale,
    scale,
    scale,
  )
}

function updatePositionRing() {
  if (
    !drone
    || !positionRing
  ) {
    return
  }

  positionRing.position.set(
    drone.position.x,
    0,
    drone.position.z,
  )
}

function updateChallengeTarget() {
  if (!challengeTarget) {
    return
  }

  if (
    !FEATURES.challenge
    || !isChallengeMode.value
    || !activeChallenge.value?.active
  ) {
    challengeTarget.visible =
      false

    return
  }

  const target =
    challengeSystem
      .getTargetPosition()

  challengeTarget.position.set(
    target.x,
    0,
    target.z,
  )

  challengeTarget.visible =
    true
}

function advanceChallengeRound() {
  physics.reset(0)

  activeChallenge.value =
    challengeSystem.nextRound(
      drone.position,
    )

  const yaw =
    challengeSystem
      .getHeadingRadians()

  physics.reset(
    yaw,
  )

  compassHeading.value =
    (
      THREE.MathUtils.radToDeg(
        yaw,
      )
      + 360
    ) % 360

  updateChallengeTarget()
  updatePositionRing()
}

function resetStabilityScore() {
  stabilityInsideTime.value = 0
  stabilityOutsideTime.value = 0
  stabilityElapsedTime.value = 0

  stabilityReadyElapsed.value = 0

  stabilityPhase.value =
    props.settings.trainingMode
    === 'stabilityTraining2'
      ? 'setup'
      : 'ready'
}

function startStabilityTraining() {
  if (
    props.settings.trainingMode
    !== 'stabilityTraining2'
    || stabilityPhase.value
    !== 'setup'
  ) {
    return
  }

  stabilityRoundWindLevel.value =
    props.settings.stabilityWindLevel

  stabilityRoundZoneSize.value =
    props.settings.stabilityZoneSize

  stabilityInsideTime.value = 0
  stabilityOutsideTime.value = 0
  stabilityElapsedTime.value = 0
  stabilityReadyElapsed.value = 0

  stabilityPhase.value =
    'ready'

  /*
   * 按下 START 的瞬間重新初始化，
   * 確保本回合從中心、靜止狀態開始。
   */
  physics?.stopMotion()

  if (physics) {
    const yaw =
      stabilityHeading.value
        ?.radians
      ?? 0

    physics.reset(
      yaw,
    )
  }

  /*
   * 本回合風場也重新從頭開始。
   * READY 期間仍然不會產生風。
   */
  windSystem.reset(
    'stability',
  )

  updatePositionRing()
  updateStabilityBoundary()
}

function retryStabilityTraining() {
  if (
    props.settings.trainingMode
    !== 'stabilityTraining2'
  ) {
    resetSimulation()
    return
  }

  if (
    stabilityPhase.value
    !== 'finished'
  ) {
    return
  }

  clearKeyboardInput()

  props.game.paused.value =
    false

  stabilityHeading.value =
    randomCardinalHeading()

  const yaw =
    stabilityHeading.value
      .radians

  stabilityInsideTime.value = 0
  stabilityOutsideTime.value = 0
  stabilityElapsedTime.value = 0
  stabilityReadyElapsed.value = 0

  stabilityPhase.value =
    'ready'

  physics?.reset(
    yaw,
  )

  compassHeading.value =
    (
      THREE.MathUtils.radToDeg(
        yaw,
      )
      + 360
    ) % 360

  windSystem.reset(
    'stability',
  )

  boundarySystem.reset()

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
  updateStabilityZone()
  updateStabilityBoundary()
  applyCamera(true)
}

function changeStabilitySettings() {
  if (
    props.settings.trainingMode
    !== 'stabilityTraining2'
  ) {
    return
  }

  resetSimulation()
}

function updateStabilityWindLevel(value) {
  if (
    props.settings.trainingMode
    !== 'stabilityTraining2'
    || stabilityPhase.value
    !== 'setup'
  ) {
    return
  }

  props.settings.stabilityWindLevel =
    value
}

function updateStabilityZoneSize(value) {
  if (
    props.settings.trainingMode
    !== 'stabilityTraining2'
    || stabilityPhase.value
    !== 'setup'
  ) {
    return
  }

  props.settings.stabilityZoneSize =
    value

  updateStabilityZone()
  updateStabilityBoundary()
}

function animate(timestamp) {
  animationFrame =
    requestAnimationFrame(
      animate,
    )

  const delta =
    Math.min(
      (
        timestamp
        - lastTimestamp
      ) / 1000
      || 0,

      0.033,
    )

  lastTimestamp =
    timestamp

  if (
    !props.game.paused.value
    && !props.controllerCalibrating
  ) {
    const telemetry =
      props.game.telemetry

    telemetry.time +=
      delta

    /*
     * Stability 的風只允許在 RUNNING 階段作用。
     *
     * READY：
     *   3、2、1 時無風。
     *
     * RUNNING：
     *   啟動 stability 專用風場。
     *
     * FINISHED：
     *   風停止。
     */
    const stabilityWindDisabled =
      isStabilityTraining.value
      && stabilityPhase.value
      !== 'running'

    /*
     * Stability 使用自己的遊戲時間，
     * 不把 READY 的 3 秒算進風場。
     */
    const windElapsedTime =
      isStabilityTraining.value
        ? stabilityElapsedTime.value
        : telemetry.time

    const rawWind =
      stabilityWindDisabled
        ? {
          acceleration:
            new THREE.Vector3(),

          speed: 0,

          direction: 0,
        }
        : windSystem.update(
          delta,
          windElapsedTime,
        )

    /*
     * Stability Lv.2 可調整風力強度。
     *
     * Lv.1：
     *   固定使用 1.0 倍風力。
     *
     * Lv.2：
     *   light / normal / strong
     *   由 stabilityWindMultiplier 決定。
     *
     * 不直接修改 WindSystem 回傳的 acceleration，
     * 避免影響 WindSystem 內部可能重複使用的向量。
     */
    const windMultiplier =
      isStabilityTraining.value
        ? stabilityWindMultiplier.value
        : 1

    const wind = {
      acceleration:
        rawWind.acceleration
          .clone()
          .multiplyScalar(
            windMultiplier,
          ),

      speed:
        rawWind.speed
        * windMultiplier,

      direction:
      rawWind.direction,
    }

    const activeInput =
      getActiveInput()

    Object.assign(
      visualInput,
      activeInput,
    )

    if (
      isStickTraining.value
    ) {
      updateStickTraining(
        activeInput,
      )
    }

    let flightInput =
      activeInput

    if (
      isStickTraining.value
    ) {
      flightInput = {
        throttle: 0.5,
        yaw: 0,
        pitch: 0,
        roll: 0,
      }
    } else if (
      isStabilityTraining.value
    ) {
      if (
        stabilityPhase.value
        === 'running'
      ) {
        flightInput = {
          throttle: 0.5,
          yaw: 0,

          pitch:
          activeInput.pitch,

          roll:
          activeInput.roll,
        }
      } else {
        flightInput = {
          throttle: 0.5,
          yaw: 0,
          pitch: 0,
          roll: 0,
        }
      }
    } else if (
      FEATURES.challenge
      && isChallengeMode.value
    ) {
      flightInput = {
        throttle:
        activeInput.throttle,

        yaw: 0,

        pitch:
        activeInput.pitch,

        roll:
        activeInput.roll,
      }
    }

    const physicsTrainingMode =
      (
        FEATURES.challenge
        && isChallengeMode.value
      )
      || isStabilityTraining.value
        ? 'free'
        : props.settings.trainingMode

    const flight =
      physics.update(
        delta,
        flightInput,
        wind.acceleration,
        physicsTrainingMode,
      )

    compassHeading.value =
      (
        Number(
          flight.yaw ?? 0,
        )
        + 360
      ) % 360

    const boundary =
      boundarySystem.update(
        drone.position,
      )

    updateStabilityBoundary()

    updateStabilityReady(
      delta,
    )

    updateStabilityScore(
      delta,
    )

    const ringMaterial =
      stabilityZone
        ?.userData
        ?.ringMaterial

    if (ringMaterial) {
      ringMaterial.color.set(
        stabilityOutside.value
          ? 0xff5c5c
          : 0xffffff,
      )

      ringMaterial.opacity =
        stabilityOutside.value
          ? 0.95
          : 0.55
    }

    if (
      FEATURES.challenge
      && isChallengeMode.value
    ) {
      activeChallenge.value =
        challengeSystem.update(
          delta,
          drone.position,
        )

      if (
        challengeSystem
          .shouldAdvance()
      ) {
        advanceChallengeRound()
      }
    }

    Object.assign(
      telemetry,
      flight,
      {
        outside:
        boundary.outside,

        boundaryCount:
        boundary.count,

        windSpeed:
        wind.speed,

        windDirection:
        wind.direction,
      },
    )

    telemetry.score =
      FEATURES.score
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

  updatePositionRing()
  updateStabilityZone()
  updateChallengeTarget()

  renderer.render(
    scene,
    camera,
  )
}

function formatStabilityTime(
  seconds,
) {
  const totalSeconds =
    Math.ceil(
      Math.max(
        0,
        seconds,
      ),
    )

  const minutes =
    Math.floor(
      totalSeconds / 60,
    )

  const secs =
    totalSeconds % 60

  return (
    `${String(minutes).padStart(2, '0')}:`
    + `${String(secs).padStart(2, '0')}`
  )
}

function formatStabilityResultTime(
  seconds,
) {
  const safeSeconds =
    Math.max(
      0,
      seconds,
    )

  const minutes =
    Math.floor(
      safeSeconds / 60,
    )

  const secs =
    safeSeconds % 60

  return (
    `${String(minutes).padStart(2, '0')}:`
    + secs
      .toFixed(1)
      .padStart(4, '0')
  )
}

function dispose() {
  cancelAnimationFrame(
    animationFrame,
  )

  resizeObserver
    ?.disconnect()

  scene?.traverse(
    (object) => {
      object.geometry
        ?.dispose()

      const materials =
        object.material
          ? (
            Array.isArray(
              object.material,
            )
              ? object.material
              : [
                object.material,
              ]
          )
          : []

      materials.forEach(
        (material) => {
          material.dispose()
        },
      )
    },
  )

  renderer
    ?.dispose()

  renderer
    ?.domElement
    ?.remove()
}

watch(
  () => [
    props.settings.cameraHeight,
    props.settings.cameraBearing,
  ],

  () =>
    applyCamera(false),
)

watch(
  () =>
    props.settings.windMode,

  resetSimulation,
)

watch(
  () =>
    props.settings.trainingMode,

  resetSimulation,
)

watch(
  () =>
    props.settings.showHeadingArrow,

  (visible) => {
    if (
      drone
        ?.userData
        .headingArrow
    ) {
      drone
        .userData
        .headingArrow
        .visible =
        visible
    }
  },
)

watch(
  controlSource,

  (source) => {
    emit(
      'control-source-ready',
      source,
    )
  },

  {
    immediate: true,
  },
)

watch(
  () =>
    props.settings.trainingMode,

  () => {
    if (
      isStickTraining.value
    ) {
      startStickTraining()

      return
    }

    stopStickTraining()
  },

  {
    immediate: true,
  },
)

watch(
  () =>
    props.settings.stabilityZoneSize,

  () => {
    if (
      props.settings.trainingMode
      !== 'stabilityTraining2'
    ) {
      return
    }

    updateStabilityZone()
    updateStabilityBoundary()
  },
)

onMounted(
  async () => {
    await nextTick()

    initScene()

    emit(
      'input-ready',
      visualInput,
    )

    emit(
      'register-actions',
      {
        reset:
        resetSimulation,

        togglePause,
      },
    )

    animationFrame =
      requestAnimationFrame(
        animate,
      )
  },
)

onBeforeUnmount(
  dispose,
)
</script>

<template>
  <div
    class="relative min-h-145 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-black/40"
  >
    <!-- Three.js 畫面 -->
    <div
      ref="canvasHost"
      class="absolute inset-0"
    />

    <!-- 飛行資訊 -->
    <FlightHUD
      v-if="
        !isStickTraining
        && !isStabilityTraining
      "
      :telemetry="game.telemetry"
      :status-text="game.statusText.value"
      :wind-mode="settings.windMode"
      :camera-bearing="
        selected(
          cameraBearingOptions,
          settings.cameraBearing,
        ).degrees
      "
    />

    <!-- 挑戰資訊 -->
    <ChallengeHUD
      v-if="
        FEATURES.challenge
        && isChallengeMode
      "
      :challenge="activeChallenge"
    />

    <!-- 搖桿訓練 -->
    <StickTrainingHUD
      v-if="isStickTraining"
      :exercise="currentExercise"
      :completed="
        stickTrainingCompleted
      "
      :waiting-for-start-center="
        stickTrainingWaitingForStartCenter
      "
      :waiting-for-center="
        stickTrainingWaitingForCenter
      "
      :waiting-for-next-round="
        stickTrainingWaitingForNextRound
      "
      :round="
        stickTrainingRound
      "
      :error-type="
        stickTrainingErrorType
      "
      :error-message="
        stickTrainingErrorMessage
      "
      :success-min="
        stickTrainingSuccessMin
      "
      :success-max="
        stickTrainingSuccessMax
      "
      :success-hold-progress="
        stickTrainingSuccessHoldProgress
      "
    />

    <!-- 穩定控制訓練 -->
    <StabilityTrainingHUD
      v-if="isStabilityTraining"
      :time-label="stabilityTimeLabel"
      :phase="stabilityPhase"
      :ready-count="stabilityReadyCount"
      :heading-label="stabilityHeadingLabel"
      :total-label="stabilityTotalLabel"
      :inside-label="stabilityInsideLabel"
      :outside-label="stabilityOutsideLabel"
      :stability-label="stabilityPercentLabel"
      :show-difficulty="
        settings.trainingMode
        === 'stabilityTraining2'
      "
      :settings="settings"
      :wind-label="stabilityWindLabel"
      :zone-label="stabilityZoneLabel"
      @update-wind-level="updateStabilityWindLevel"
      @update-zone-size="updateStabilityZoneSize"
      @start="startStabilityTraining"
      @retry="retryStabilityTraining"
      @change-settings="changeStabilitySettings"
    />

    <!-- 右上角 HUD -->
    <div
      v-if="!isStickTraining"
      class="pointer-events-none absolute right-4 top-4 z-30 flex flex-col items-end gap-3"
    >
      <CompassHUD
        :heading="
          compassHeading
        "
      />
    </div>

    <!-- 鏡頭說明 -->
    <div
      v-if="
        !isStickTraining
        && !isStabilityTraining
      "
      class="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-white/60 backdrop-blur"
    >
      鏡頭只跟位置，不跟機頭旋轉
    </div>
  </div>
</template>