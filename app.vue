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
  font-family: "Roboto Mono", monospace;
  background-color: black;
  color: white;
}

.glass {
  @apply backdrop-blur-2xl  bg-gray/10 shadow-lg backdrop-invert-10;
}
.glass-2 {
  @apply backdrop-blur-2xl  bg-black/30 shadow-lg backdrop-invert-10;
}
.min-h-100dvh {
  min-height: 100dvh;
}
.h-100dvh {
  height: 100dvh;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
}
.cool-hover {
  @apply hover:scale-110%;
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
