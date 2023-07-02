<script setup></script>

<template>
  <AnimBgContainer>
    <Hero />
  </AnimBgContainer>
  <AnimBgContainer> </AnimBgContainer>
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
.min-h-100dvh {
  min-height: 100dvh;
}
.h-100dvh {
  height: 100dvh;
}
</style>
