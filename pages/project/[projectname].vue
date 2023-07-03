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
          <div class="flex gap-8 p-4">
            <div class="w-1/3">
              <h3 class="mt-0 text-2xl text-opacity-90 v-text-base my-0">
                Objective
              </h3>
              <p
                v-for="(paragraph, index) in project.objectiveDetails"
                :key="index"
              >
                {{ paragraph }}
              </p>
              <h3 class="mt-0 text-2xl text-opacity-90 v-text-base my-0">
                Details
              </h3>
              <p
                v-for="(paragraph, index) in project.projectDetails"
                :key="index"
              >
                {{ paragraph }}
              </p>
            </div>
            <div class="w-2/3 flex flex-col gap-8">
              <div
                v-for="(img, index) in project.images"
                :key="index"
                class="w-full"
              >
                <img :src="img" class="w-full object-cover rounded-xl" alt="" />
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
