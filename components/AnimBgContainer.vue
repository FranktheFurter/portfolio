<template>
  <div ref="vantaElement" class="">
    <slot />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue"
import * as THREE from "three"
import FOG from "vanta/dist/vanta.fog.min"

let vantaEffect = null
let vantaElement = ref(null)

const { activePreset, switchPreset, randomizePreset } = useVantaEffect()

function startEffect() {
  if (vantaEffect) {
    vantaEffect.destroy()
  }

  if (process.client) {
    vantaEffect = FOG({
      el: vantaElement.value,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: activePreset.value.highlightColor,
      midtoneColor: activePreset.value.midtoneColor,
      lowlightColor: activePreset.value.lowlightColor,
      baseColor: activePreset.value.baseColor,
      blurFactor: activePreset.value.blurFactor,
      speed: activePreset.value.speed,
      zoom: activePreset.value.zoom,
    })
  }
}

onMounted(startEffect)

watch(activePreset, () => {
  startEffect()
})

onUnmounted(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>

<style scoped></style>
