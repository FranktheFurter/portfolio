// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      brand: {
        primary: "#025388",
        light: "#5ebbff",
        dark: "#0081df",
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        // add your custom icon set here
        mdi: async () => {
          // load the MDI dataset
          const mdi = await import("@iconify/json/json/mdi.json")
          return mdi.default
        },
      },
    }),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: ["Roboto", "Rubik:400,700"],
        mono: ["Fira Code", "Fira Mono:400,700", "Roboto Mono"],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
