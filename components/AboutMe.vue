<script lang="ts" setup>
const { activePreset } = useVantaEffect()
const currHex = computed(() => {
  const colorInt = activePreset.value.baseColor
  return colorInt.toString(16).padStart(6, "0")
})
</script>

<template>
  <SectionHeading>About Me</SectionHeading>
  <SectionContainer>
    <div class="w-100% flex flex-col md:flex-row md:gap-16">
      <div class="md:w-1/2 text-base">
        <div class="float-left mr-8 mb-4">
          <div
            class="w-42 h-42 rounded-full overflow-hidden flex items-center justify-center v-bg-base"
          >
            <img
              class="transform scale-58 translate-y-[100px] translate-x-[-25px] grayscale-20"
              src="/images/me.png"
              alt=""
            />
          </div>
        </div>
        <p class="opacity-80 mt-0">
          Hello, I'm Marc Frankfurter, a passionate front-end developer and
          designer who's been captivated by technology since childhood.
        </p>
        <p class="opacity-80">
          I graduated in computer engineering from Ulm, specializing in
          usability engineering and UI development.
        </p>
        <p class="opacity-80">
          Initially working as a UX designer, I eventually shifted towards a
          more technical role due to my love for development. I thrive on the
          intricate process of combining individual elements in both programming
          and designing.
        </p>

        <!-- <hr class="my-8 opacity-33" />
        <div class="flex gap-8 justify-center">
          <a href=""
            ><button
              class="w-12 h-12 i-mdi-github text-white/33 hover:text-white/66 cool-hover"
            ></button
          ></a>
          <a href=""
            ><button
              class="w-12 h-12 i-mdi-linkedin text-white/33 hover:text-white/66 cool-hover"
            ></button
          ></a>
          <a href=""
            ><button
              class="w-12 h-12 i-mdi-soundcloud text-white/33 hover:text-white/66 cool-hover"
            ></button
          ></a>
        </div> -->
        <img
          :src="`https://ghchart.rshah.org/${currHex}/FranktheFurter`"
          alt="2016rshah's Blue Github Chart"
          class="w-100%"
        />
      </div>
      <div class="md:w-1/2 mt-8 md:mt-0">
        <Timeline />
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped></style>
