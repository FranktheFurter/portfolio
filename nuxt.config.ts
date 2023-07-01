// nuxt.config.ts
//last try
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@vueuse/nuxt", "@nuxt/image"],
  app: {
    baseURL: "/portfolio/",
  },
  ssr: true,
})
