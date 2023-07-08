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
      @click="closeImage"
    >
      <div
        class="absolute top-20% bottom-20% left-0 text-2xl text-white flex items-center px-4 cursor-pointer"
        @click.stop="prevImage"
      >
        ←
      </div>
      <img
        :src="$config.app.baseURL + props.imgUrls[selectedIndex]"
        alt="Full Screen Image"
        class="max-w-100% max-h-100% md:max-w-4/5 md:max-h-4/5"
      />
      <div
        class="absolute top-20% bottom-20% right-0 text-2xl text-white flex items-center px-4 cursor-pointer"
        @click.stop="nextImage"
      >
        →
      </div>
    </div>
  </div>
</template>
