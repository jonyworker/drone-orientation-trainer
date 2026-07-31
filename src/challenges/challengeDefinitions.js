export const CARDINAL_HEADINGS = [
  { degrees: 0, radians: 0, key: 'north', label: '北', shortLabel: 'N' },
  { degrees: 90, radians: Math.PI / 2, key: 'east', label: '東', shortLabel: 'E' },
  { degrees: 180, radians: Math.PI, key: 'south', label: '南', shortLabel: 'S' },
  { degrees: 270, radians: -Math.PI / 2, key: 'west', label: '西', shortLabel: 'W' },
]

export const WORLD_DIRECTIONS = [
  { key: 'north', label: '北方', arrow: '↑', vector: { x: 0, z: -1 } },
  { key: 'east', label: '東方', arrow: '→', vector: { x: 1, z: 0 } },
  { key: 'south', label: '南方', arrow: '↓', vector: { x: 0, z: 1 } },
  { key: 'west', label: '西方', arrow: '←', vector: { x: -1, z: 0 } },
]

export const randomHeadingChallenge = {
  id: 'random-heading-cardinal',
  title: 'Random Heading',
  description: '保持機頭方向，使用 Pitch／Roll 前往指定的世界方向。',
  distance: 3,
  successDelay: 0.65,
}

export const challengeDefinitions = [randomHeadingChallenge]
