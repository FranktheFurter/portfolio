import { ref, computed } from "vue"

const presets = [
  {
    highlightColor: 2144970,
    midtoneColor: 9729384,
    lowlightColor: 12633084,
    baseColor: 9702162,
    blurFactor: 0.6401590012235884,
    speed: 0.7989595905894243,
    zoom: 0.7943671305049834,
  },
  {
    highlightColor: 3844822,
    midtoneColor: 7920127,
    lowlightColor: 11778447,
    baseColor: 14123107,
    blurFactor: 0.6401590012235884,
    speed: 0.7989595905894243,
    zoom: 0.7943671305049834,
  },
  {
    highlightColor: 15493790,
    midtoneColor: 2016348,
    lowlightColor: 8117672,
    baseColor: 710578,
    blurFactor: 0.7130299543550986,
    speed: 2.951984071283417,
    zoom: 0.771712571706178,
  },

  {
    highlightColor: 7643069,
    midtoneColor: 1703893,
    lowlightColor: 6759269,
    baseColor: 16724880,
    blurFactor: 0.5757712238275723,
    speed: 0.6072462638980404,
    zoom: 0.8500150114272965,
  },
]
const activePreset = ref(presets[0])

// Convert color numbers to hex strings
const highlightColorHex = computed(
  () => "#" + activePreset.value.highlightColor.toString(16).padStart(6, "0")
)
const midtoneColorHex = computed(
  () => "#" + activePreset.value.midtoneColor.toString(16).padStart(6, "0")
)
const lowlightColorHex = computed(
  () => "#" + activePreset.value.lowlightColor.toString(16).padStart(6, "0")
)
const baseColorHex = computed(
  () => "#" + activePreset.value.baseColor.toString(16).padStart(6, "0")
)

export const useVantaEffect = () => {
  function switchPreset(index: number) {
    if (index >= 0 && index < presets.length) {
      activePreset.value = presets[index]
    }
  }

  function randomColor() {
    return Math.floor(Math.random() * 16777215)
  }

  function randomValue(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  function randomizePreset() {
    activePreset.value = {
      highlightColor: randomColor(),
      midtoneColor: randomColor(),
      lowlightColor: randomColor(),
      baseColor: randomColor(),
      blurFactor: randomValue(0, 1),
      speed: randomValue(0.5, 3),
      zoom: randomValue(0.1, 1),
    }
  }

  return {
    activePreset,
    presets,
    switchPreset,
    randomizePreset,
    highlightColorHex,
    midtoneColorHex,
    lowlightColorHex,
    baseColorHex,
  }
}
