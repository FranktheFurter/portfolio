<script lang="ts" setup>
import projects from "@/data/projects"
</script>

<template>
  <h2>Projects</h2>
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div
      v-for="project in projects"
      :key="project.id"
      class="bg-white/20 w-100% rounded-8"
    >
      <NuxtLink :to="`projects/${project.id}`">
        <div class="h-300px p-8">{{ project.title }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
