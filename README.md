# Drone Orientation Trainer v0.2 Foundation

以 Vue 3、JavaScript、Tailwind CSS 與 Three.js 製作的第三人稱 LOS / ATTI 方向感訓練器。

## v0.2 重構重點

- `core/DronePhysics.js`：機身座標輸入、慣性、速度與高度限制
- `core/CameraController.js`：固定世界方位相機與平滑跟隨
- `systems/WindSystem.js`：無風、微風與世界座標風力
- `systems/BoundarySystem.js`：訓練區域與超界次數
- `systems/ScoreSystem.js`：暫時性的中心維持分數
- `stores/`：遊戲狀態與設定集中管理
- `components/`：HUD、面板與遊戲畫布模組化

## 執行

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## 操作

- W / S：Pitch
- A / D：Roll
- ↑ / ↓：Throttle
- ← / →：Yaw
- Space：暫停
- R：重置
- H：顯示說明


## v0.3 Random Heading

- 機頭只會隨機朝向 0°、90°、180°、270°。
- 目標方向固定為世界座標的北、東、南、西。
- 挑戰期間鎖定 Yaw，只能使用 Pitch／Roll 平移。
- 每題固定移動 3 公尺，完成後自動回到中央並產生下一題。
- 地面會顯示目標方向的落點環。

> 360° 與 0° 是同一航向，因此隨機池只保留 0°，避免北向出現機率加倍。
