<template>
  <div
    ref="vantaElement"
    class="h-100vh flex items-center justify-center text-center"
  >
    <div
      class="z-2 backdrop-blur-2xl rounded-2xl p-8 bg-gray/10 shadow-lg backdrop-invert-10"
    >
      <h1 class="text-8xl my-0 text-white/80">Hello World</h1>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue"
import * as THREE from "three"
import FOG from "vanta/dist/vanta.fog.min"

let vantaEffect = null
let vantaElement = ref(null)

// Generate a random color in hexadecimal format
function randomColor() {
  return Math.floor(Math.random() * 16777215) // 16777215 is FFFFFF in decimal
}

// Generate a random value within a specific range
function randomValue(min, max) {
  return Math.random() * (max - min) + min
}

onMounted(async () => {
  if (process.client) {
    vantaEffect = FOG({
      el: vantaElement.value,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: randomColor(),
      midtoneColor: randomColor(),
      lowlightColor: randomColor(),
      baseColor: randomColor(),
      blurFactor: randomValue(0.4, 1), // Random value between 0.5 and 1
      speed: randomValue(0.5, 3), // Random value between 0.5 and 3
      zoom: randomValue(0.1, 1), // Random value between 0.1 and 1
    })
  }
})

onUnmounted(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>
<style scoped></style>
