<script lang="ts" setup>
const { activePreset, randomizePreset, switchPreset } = useVantaEffect()
</script>

<template>
  <div class="min-h-100vh flex justify-center items-center">
    <div class="flex items-center md:gap-8 rounded-2xl flex-col md:flex-row">
      <div class="p-2 md:p-8 flex flex-col justify-center items-center gap-4">
        <div
          class="h-48 md:h-64 w-48 md:w-64 rounded-full glass flex items-center justify-center"
        >
          <img
            src="/logo/fr-logo.png"
            class="max-h-66% max-w-66% grayscale brightness-0 invert-100 opacity-80"
            alt=""
          />
        </div>

        <!-- <button @click="randomizePreset()">rndm</button> -->
        <div class="flex gap-8 justify-center"><ColorSelector /></div>
        <div class="flex justify-center">
          <button
            class="i-mdi-dice-3 text-white/66 hover:text-white/90 h-12 w-12"
            @click="randomizePreset()"
          ></button>
        </div>
      </div>
      <div class="p-4 md:p-16 text-center text-shadow-xl rounded-2xl">
        <h1 class="text-3xl md:text-6xl opacity-90 my-0">
          Hi, I am Marc Frankfurter
        </h1>
        <h2 class="opacity-80 text-xl">A Fullstack Developer & Designer</h2>
        <div class="flex justify-center py-4">
          <div class="h-2 w-16 v-bg-base" />
          <div class="h-2 w-16 v-bg-low" />
          <div class="h-2 w-16 v-bg-mid" />
          <div class="h-2 w-16 v-bg-high" />
        </div>
        <div class="text-xl flex justify-center gap-8 opacity-80 pt-8">
          <div>About Me</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
