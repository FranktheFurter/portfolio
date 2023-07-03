<script lang="ts" setup>
import { projects } from "@/data/projects"
</script>

<template>
  <SectionHeading>Projects</SectionHeading>
  <SectionContainer>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div v-for="(project, index) in projects" :key="index">
        <NuxtLink :to="`/project/${project.url}`"
          ><div class="w-100% glass">
            <img
              :src="$config.app.baseURL + project.projectCover"
              class="w-100%"
              alt=""
            />
            <div class="w-100% aspect-5/1">
              <p class="px-2 text-white/80">{{ project.projectTitle }}</p>
            </div>
          </div></NuxtLink
        >
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped></style>
