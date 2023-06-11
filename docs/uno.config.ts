import { defineConfig, presetIcons, presetUno } from 'unocss'
import { colors } from 'unuse-ui/src/config'

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
  content: {
    pipeline: {
      include: [/.*\/unuse-ui\.js(.*)?$/, './**/*.vue', './**/*.md'],
    },
  },
})
