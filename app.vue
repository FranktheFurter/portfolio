<script setup lang="ts">
import { watch } from "vue"
import { useVantaEffect } from "./composables/useVantaEffect"

const { baseColorHex, lowlightColorHex, midtoneColorHex, highlightColorHex } =
  useVantaEffect()

onMounted(() => {
  // Set initial values for CSS variables
  document.body.style.setProperty("--base-color", baseColorHex.value)
  document.body.style.setProperty("--lowlight-color", lowlightColorHex.value)
  document.body.style.setProperty("--midtone-color", midtoneColorHex.value)
  document.body.style.setProperty("--highlight-color", highlightColorHex.value)
})
watch(baseColorHex, (newVal) => {
  document.body.style.setProperty("--base-color", newVal)
})

watch(lowlightColorHex, (newVal) => {
  document.body.style.setProperty("--lowlight-color", newVal)
})

watch(midtoneColorHex, (newVal) => {
  document.body.style.setProperty("--midtone-color", newVal)
})

watch(highlightColorHex, (newVal) => {
  document.body.style.setProperty("--highlight-color", newVal)
})
</script>

<template>
  <NuxtPage />
</template>

<style>
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.v-text-base {
  color: var(--base-color);
}

.v-text-low {
  color: var(--lowlight-color);
}

.v-text-mid {
  color: var(--midtone-color);
}

.v-text-high {
  color: var(--highlight-color);
}

.v-bg-base {
  background-color: var(--base-color);
}

.v-bg-low {
  background-color: var(--lowlight-color);
}

.v-bg-mid {
  background-color: var(--midtone-color);
}

.v-bg-high {
  background-color: var(--highlight-color);
}
</style>
