<script setup></script>

<template>
  <AnimBgContainer>
    <Hero />

    <div class="bg-black/66 backdrop-blur-2xl">
      <SectionContainer>
        <AboutMe />
      </SectionContainer>
      <SectionContainer>
        <Projects />
      </SectionContainer>
      <SectionContainer>
        <Contact />
      </SectionContainer>
    </div>
  </AnimBgContainer>
</template>

<style>
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
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
.grad {
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.66));
}
</style>
