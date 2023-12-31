import { defineConfig, presetIcons, presetUno } from 'unocss'
import { presetUnuse } from './src/preset'

export default defineConfig({
  presets: [
    presetUno(),
    presetUnuse(),
    presetIcons({
      scale: 1,
      warn: true,
    }),
  ],
})
