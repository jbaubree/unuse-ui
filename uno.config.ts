import { defineConfig, presetIcons, presetUno } from 'unocss'
import { colors } from './src/config'

export default defineConfig({
  theme: {
    colors,
  },
  presets: [
    presetUno(),
    presetIcons({
      scale: 1,
      warn: true,
    }),
  ],
})
