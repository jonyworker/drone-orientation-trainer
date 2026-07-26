export const challengeDefinitions = [
	{
		id: 'east-north-south',

		title: '東向北返',

		description:
			'保持機頭朝東，先往北移動 3 公尺，再往南移動 3 公尺。',

		// Three.js yaw：
		// 0            = 北
		// Math.PI / 2  = 東
		// Math.PI      = 南
		// -Math.PI / 2 = 西
		initialYaw: Math.PI / 2,

		steps: [
			{
				id: 'move-north',
				direction: 'north',
				distance: 3,
				label: '往北移動 3 公尺',
			},
			{
				id: 'move-south',
				direction: 'south',
				distance: 3,
				label: '往南移動 3 公尺',
			},
		],
	},
]