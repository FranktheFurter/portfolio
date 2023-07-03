<script lang="ts" setup></script>

<template>
  <div>
    <h1>test</h1>
  </div>
  <div>
    <h1>test</h1>
  </div>
</template>

<style scoped>
div {
  line-height: 1.75em;
  border-top: 3px solid;
  border-image: linear-gradient(
    to right,
    var(--lowlight-color) 0%,
    var(--base-color) 100%
  );
  border-image-slice: 1;
  border-width: 3px;
  margin: 0;
  padding: 40px;

  &:before {
    position: absolute;
    border-radius: 50%;
    padding: 10px;
    height: 1.25em;
    width: 1.25em;
    text-align: center;
    line-height: 1.25em;
  }
}
div:nth-child(odd) {
  border-right: 3px solid;
  padding-left: 0;

  &:before {
    left: 100%;
    margin-left: -20px;
  }
}
div:nth-child(even) {
  border-left: 3px solid;
  padding-right: 0;

  &:before {
    right: 100%;
    margin-right: -20px;
  }
}
div:first-child {
  border-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
div:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
