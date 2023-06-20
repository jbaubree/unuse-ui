import { defineConfig, presetIcons, presetUno } from 'unocss'
import { presetUnuse } from 'unuse-ui/src/preset'

export default defineConfig({
  presets: [
    presetUno(),
    presetUnuse(),
    presetIcons({
      scale: 1,
      warn: true,
    }),
  ],
  content: {
    pipeline: {
      include: [/.*\/unuse-ui\.js(.*)?$/, './**/*.vue', './**/*.md'],
    },
  },
})
