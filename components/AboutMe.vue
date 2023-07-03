<script lang="ts" setup></script>

<template>
  <SectionHeading>About Me</SectionHeading>
  <SectionContainer>
    <div class="w-100% flex flex-col md:flex-row md:gap-16">
      <div class="md:w-1/2 text-base">
        <div class="float-left mr-4 mb-4">
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
        <p class="opacity-90 mt-0">
          Hello, I'm Marc Frankfurter, a passionate front-end developer and
          designer who's been captivated by technology since childhood.
        </p>
        <p>
          I graduated in computer engineering from Ulm, specializing in
          usability engineering and UI development.
        </p>
        <p>
          Initially working as a UX designer, I eventually shifted towards a
          more technical role due to my love for development. I thrive on the
          intricate process of combining individual elements in both programming
          and designing.
        </p>
      </div>
      <div class="md:w-1/2">
        <Timeline />
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped></style>
