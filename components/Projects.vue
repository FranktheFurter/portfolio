<script lang="ts" setup>
import { projects } from "@/data/projects"
</script>

<template>
  <SectionHeading id="projects">Projects</SectionHeading>
  <SectionContainer>
    <div>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <NuxtLink
          v-for="(project, index) in projects"
          :key="index"
          class="glass cool-hover"
          :to="`/project/${project.url}`"
        >
          <div class="w-100% aspect-ratio-1/1">
            <img
              :src="$config.app.baseURL + project.images[0]"
              class="object-cover w-100% h-100%"
              alt=""
            />
          </div>

          <p class="px-2 text-white/80 line-clamp-2">
            {{ project.projectTitle }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped></style>
