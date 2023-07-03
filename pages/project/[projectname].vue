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
          <div class="flex flex-col-reverse md:flex-row gap-8 p-4">
            <div class="md:w-1/3">
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
            <div
              class="w-100% md:w-2/3 flex md:flex-col gap-8 overflow-x-scroll w-100%"
            >
              <div
                v-for="(img, index) in project.images"
                :key="index"
                class="w-4/5 flex-none"
              >
                <img
                  :src="$config.app.baseURL + img"
                  class="rounded-xl w-100%"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
