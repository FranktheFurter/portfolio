<script setup>
useHead(() => ({
  title: "Your Page Title",
  meta: [
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "mobile-web-app-capable", content: "yes" },
  ],
}))
</script>

<template>
  <div class="snap-container">
    <div class="snap-element"><Hero /></div>
    <div class="snap-element"><Hero2 /></div>
    <div class="snap-element"><Hero /></div>
    <div class="snap-element"><Hero2 /></div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: black;
  color: white;
}

.snap-container {
  height: 100dvh; /* Full viewport height. */
  width: 100%;
  scroll-snap-type: y mandatory; /* Snaps on the y-axis. */
  overflow-y: scroll; /* Enables vertical scroll. */
}

.snap-element {
  height: 100dvh; /* Each element is a full viewport height. */
  scroll-snap-align: center; /* Snaps to the center of the element. */
}
</style>
