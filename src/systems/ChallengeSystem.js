import * as THREE from 'three'
import {
  CARDINAL_HEADINGS,
  WORLD_DIRECTIONS,
} from '@/challenges/challengeDefinitions.js'

export class ChallengeSystem {
  constructor() {
    this.challenge = null
    this.heading = null
    this.direction = null
    this.startPosition = new THREE.Vector3()
    this.targetPosition = new THREE.Vector3()
    this.progress = 0
    this.round = 0
    this.phase = 'idle'
    this.successTimer = 0
    this.lastPair = ''
  }

  start(challenge, position) {
    this.challenge = challenge
    this.round = 0
    this.lastPair = ''
    return this.nextRound(position)
  }

  nextRound(position) {
    if (!this.challenge) return this.getState()

    let heading
    let direction
    let pair

    do {
      heading = randomItem(CARDINAL_HEADINGS)
      direction = randomItem(WORLD_DIRECTIONS)
      pair = `${heading.key}:${direction.key}`
    } while (pair === this.lastPair)

    this.lastPair = pair
    this.heading = heading
    this.direction = direction
    this.round += 1
    this.progress = 0
    this.phase = 'active'
    this.successTimer = 0
    this.startPosition.copy(position)
    this.targetPosition.set(
      position.x + direction.vector.x * this.challenge.distance,
      position.y,
      position.z + direction.vector.z * this.challenge.distance,
    )

    return this.getState()
  }

  reset() {
    this.challenge = null
    this.heading = null
    this.direction = null
    this.startPosition.set(0, 0, 0)
    this.targetPosition.set(0, 0, 0)
    this.progress = 0
    this.round = 0
    this.phase = 'idle'
    this.successTimer = 0
    this.lastPair = ''
    return this.getState()
  }

  update(delta, position) {
    if (!this.challenge || !this.direction) return this.getState()

    if (this.phase === 'success') {
      this.successTimer += delta
      return this.getState()
    }

    const displacement = position.clone().sub(this.startPosition)
    const { x, z } = this.direction.vector

    this.progress = Math.max(
      0,
      displacement.x * x + displacement.z * z,
    )

    if (this.progress >= this.challenge.distance) {
      this.progress = this.challenge.distance
      this.phase = 'success'
      this.successTimer = 0
    }

    return this.getState()
  }

  shouldAdvance() {
    return (
      this.phase === 'success'
      && this.successTimer >= this.challenge.successDelay
    )
  }

  getHeadingRadians() {
    return this.heading?.radians ?? 0
  }

  getTargetPosition() {
    return this.targetPosition
  }

  getState() {
    return {
      active: Boolean(this.challenge),
      id: this.challenge?.id ?? null,
      title: this.challenge?.title ?? '',
      description: this.challenge?.description ?? '',
      round: this.round,
      phase: this.phase,
      headingDegrees: this.heading?.degrees ?? 0,
      headingLabel: this.heading?.label ?? '',
      headingShortLabel: this.heading?.shortLabel ?? '',
      targetDirection: this.direction?.key ?? '',
      targetLabel: this.direction?.label ?? '',
      targetArrow: this.direction?.arrow ?? '',
      targetDistance: this.challenge?.distance ?? 0,
      progress: this.progress,
      completed: this.phase === 'success',
    }
  }
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)]
}
