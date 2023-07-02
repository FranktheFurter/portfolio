<script lang="ts" setup>
const { activePreset, randomizePreset, switchPreset } = useVantaEffect()
</script>

<template>
  <div class="h-100vh flex justify-center items-center">
    <div class="flex items-center md:gap-8 rounded-2xl flex-col md:flex-row">
      <div class="p-2 md:p-8">
        <div
          class="aspect-1/1 h-48 md:h-64 rounded-full glass flex items-center justify-center"
        >
          <img
            src="/logo/fr-logo.png"
            class="max-h-66% max-w-66% grayscale brightness-0 invert-100 opacity-66"
            alt=""
          />
        </div>
        <div class="flex justify-center py-4">
          <div class="h-2 w-12 v-bg-base" />
          <div class="h-2 w-12 v-bg-low" />
          <div class="h-2 w-12 v-bg-mid" />
          <div class="h-2 w-12 v-bg-high" />
        </div>
        <!-- <button @click="randomizePreset()">rndm</button> -->
        <div class="flex gap-4 justify-center"><ColorSelector /></div>
      </div>
      <div class="p-4 md:p-16 text-center text-shadow-xl">
        <h1 class="text-3xl md:text-6xl opacity-90 my-0">
          Hi, I am Marc Frankfurter
        </h1>
        <h2 class="opacity-70 text-xl">A Fullstack Developer & Designer</h2>
        <div class="text-xl flex justify-center gap-8 opacity-65 pt-8">
          <div>About Me</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
