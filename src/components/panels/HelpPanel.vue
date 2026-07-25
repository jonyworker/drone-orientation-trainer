<script setup>
const emit = defineEmits(['close'])
</script>

<template>
  <div
    class="absolute inset-0 z-30 grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
    @click.self="emit('close')"
  >
    <section class="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#15181f] p-6 shadow-2xl">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.24em] text-lime-300/70">
            Keyboard controls
          </p>

          <h2 class="mt-2 text-2xl font-semibold">
            操作說明
          </h2>
        </div>

        <button
          class="rounded-xl border border-white/10 px-3 py-2 text-sm hover:bg-white/5"
          @click="emit('close')"
        >
          關閉
        </button>
      </div>

      <div class="mt-6 grid gap-3 sm:grid-cols-2">
        <div class="rounded-2xl bg-black/25 p-4">
          <h3 class="font-semibold">左搖桿</h3>

          <p class="mt-3 leading-7 text-white/65">
            <kbd>W</kbd> 升高　
            <kbd>S</kbd> 下降
            <br />
            <kbd>A</kbd> 左轉　
            <kbd>D</kbd> 右轉
          </p>
        </div>

        <div class="rounded-2xl bg-black/25 p-4">
          <h3 class="font-semibold">右搖桿</h3>

          <p class="mt-3 leading-7 text-white/65">
            <kbd>↑</kbd> 前進　
            <kbd>↓</kbd> 後退
            <br />
            <kbd>←</kbd> 左移　
            <kbd>→</kbd> 右移
          </p>
        </div>
      </div>

      <div class="mt-3 rounded-2xl bg-black/25 p-4 text-sm leading-7 text-white/65">
        <kbd>Space</kbd> 暫停／繼續　
        <kbd>R</kbd> 重置　
        <kbd>H</kbd> 顯示／隱藏說明
      </div>

      <p class="mt-5 text-sm leading-6 text-white/50">
        這是無 GPS 水平位置訓練。鬆開方向鍵後，無人機會因慣性繼續漂移，需要提前反向修正。
      </p>
    </section>
  </div>
</template>

<style scoped>
kbd {
  display: inline-grid;
  min-width: 1.8rem;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 0.15);
  border-bottom-width: 2px;
  border-radius: 0.45rem;
  background: rgb(255 255 255 / 0.06);
  padding: 0.05rem 0.4rem;
  color: white;
  font-size: 0.75rem;
}
</style>
