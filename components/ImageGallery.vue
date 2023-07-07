<script lang="ts" setup>
import { ref } from "vue"

const props = defineProps<{
  imgUrls: string[]
  childCss: string
}>()

const selectedIndex = ref<number | null>(null)

const openImage = (index: number) => {
  selectedIndex.value = index
}

const closeImage = () => {
  selectedIndex.value = null
}

const nextImage = () => {
  if (selectedIndex.value !== null) {
    selectedIndex.value = (selectedIndex.value + 1) % props.imgUrls.length
  }
}

const prevImage = () => {
  if (selectedIndex.value !== null) {
    selectedIndex.value =
      (selectedIndex.value - 1 + props.imgUrls.length) % props.imgUrls.length
  }
}
</script>

<template>
  <div class="flex flex-wrap">
    <div
      v-for="(imgUrl, index) in props.imgUrls"
      :key="index"
      class="cursor-pointer m-2"
      :class="props.childCss"
      @click="openImage(index)"
    >
      <img
        :src="$config.app.baseURL + imgUrl"
        alt="Gallery Image"
        class="h-32 w-32 object-cover"
      />
    </div>

    <div
      v-if="selectedIndex !== null"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
    >
      <div
        class="absolute top-4 left-4 text-2xl text-white cursor-pointer"
        @click="closeImage"
      >
        X
      </div>
      <div
        class="absolute top-20% bottom-20% left-0 text-2xl text-white flex items-center px-4 cursor-pointer"
        @click="prevImage"
      >
        ←
      </div>
      <img
        :src="$config.app.baseURL + props.imgUrls[selectedIndex]"
        alt="Full Screen Image"
        class="max-w-4/5 max-h-4/5"
      />
      <div
        class="absolute top-20% bottom-20% right-0 text-2xl text-white flex items-center px-4 cursor-pointer"
        @click="nextImage"
      >
        →
      </div>
    </div>
  </div>
</template>
