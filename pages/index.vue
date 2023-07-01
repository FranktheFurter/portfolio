<template>
  <div class="snap-container">
    <div class="snap-element"><Hero /></div>
    <div class="snap-element"><Hero /></div>
    <div class="snap-element"><Hero /></div>
    <div class="snap-element"><Hero /></div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: black;
  color: white;
  overflow: hidden; /* Prevents body from scrolling. */
}

.snap-container {
  height: 100vh; /* Full viewport height. */
  width: 100%;
  scroll-snap-type: y mandatory; /* Snaps on the y-axis. */
  overflow-y: scroll; /* Enables vertical scroll. */
}

.snap-element {
  height: 100vh; /* Each element is a full viewport height. */
  scroll-snap-align: center; /* Snaps to the center of the element. */
}
</style>
