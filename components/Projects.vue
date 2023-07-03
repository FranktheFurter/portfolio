<script lang="ts" setup>
import { projects } from "@/data/projects"
</script>

<template>
  <SectionHeading>Projects</SectionHeading>
  <SectionContainer>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="(project, index) in projects" :key="index">
        <NuxtLink :to="`/project/${project.url}`">{{
          project.projectTitle
        }}</NuxtLink>
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped></style>
