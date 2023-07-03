<script lang="ts" setup>
const props = defineProps({
  title: String,
  desc: String,
  time: String,
})
</script>

<template>
  <div class="text-xs b-left pl-4">
    <div class="">
      <h3 class="my-0 text-2xl text-opacity-90 v-text-base">{{ title }}</h3>
      <div>
        <div class="opacity-66">{{ desc }}</div>
        <div class="opacity-66">{{ time }}</div>
      </div>
    </div>
    <p class="text-base opacity-90">
      <slot />
    </p>
  </div>
</template>

<style scoped>
.b-left {
  border-left: 1px solid var(--base-color);
}
</style>
