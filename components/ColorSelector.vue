<script lang="ts" setup>
const {
  activePreset,
  presets,
  switchPreset,
  baseColorHex,
  highlightColorHex,
  lowlightColorHex,
  midtoneColorHex,
  randomizePreset,
} = useVantaEffect()
</script>

<template>
  <div
    v-for="(preset, index) in presets"
    :key="index"
    class="w-8 h-8 glass rounded-full"
    @click="switchPreset(index)"
  ></div>
  <!-- <div class="w-8 h-8" @click="randomizePreset()">R</div> -->
</template>

<style scoped></style>
