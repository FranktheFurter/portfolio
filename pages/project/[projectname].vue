<script lang="ts" setup>
import { projects } from "@/data/projects"

const route = useRoute()
const projectName = route.params.projectname

const project = computed(() => {
  return projects.find((p) => p.url === projectName)
})
</script>

<template>
  <div class="v-bg-high min-h-100vh">
    <div class="bg-black/80 min-h-100vh">
      <div v-if="project">
        <SectionContainer>
          <SectionHeading>{{ project.projectTitle }}</SectionHeading>
          <div class="flex flex-col-reverse md:flex-col-reverse gap-8 p-4">
            <div class="">
              <h3 class="mt-0 text-2xl text-opacity-90 v-text-base my-0">
                <span class="text-white/33">// </span>Tools & Technologies
              </h3>
              <div class="flex flex-wrap gap-2 py-4 text-sm">
                <div
                  v-for="(tech, index) in project.tech"
                  :key="index"
                  class="glass-3 p-x-3 py-1 rounded-full text-white/50"
                >
                  {{ tech }}
                </div>
              </div>
              <h3 class="mt-0 text-2xl text-opacity-90 v-text-base my-0">
                <span class="text-white/33">// </span>Objective
              </h3>
              <p
                v-for="(paragraph, index) in project.objectiveDetails"
                :key="index"
                class="opacity-80"
              >
                {{ paragraph }}
              </p>

              <h3 class="mt-0 text-2xl text-opacity-90 v-text-base my-0">
                <span class="text-white/33">// </span>Details
              </h3>
              <p
                v-for="(paragraph, index) in project.projectDetails"
                :key="index"
                class="opacity-80"
              >
                {{ paragraph }}
              </p>
              <div v-if="project.links">
                <h3 class="mt-0 text-2xl text-opacity-90 v-text-base my-0">
                  <span class="text-white/33">// </span>Links
                </h3>
                <NuxtLink
                  v-for="(link, index) in project.links"
                  :key="index"
                  :href="link.url"
                  target="_blank"
                  class="opacity-80 flex py-2 mt-4 underline-none text-white/80 gap-2 items-center hover:border-white hover:border-solid rounded-md border-solid px-2"
                >
                  <span v-if="link.icon" :class="link.icon" class="h-8 w-8" />
                  <span v-else class="h-8 w-8 i-mdi-link" />
                  <span class="underline-none">{{ link.desc }}</span>
                </NuxtLink>
              </div>
            </div>
            <div>
              <ImageGallery :img-urls="project.images" child-css="" />
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
