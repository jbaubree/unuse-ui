import { defineConfig, presetIcons, presetUno } from 'unocss'
import { presetUnuse } from 'unuse-ui'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  presets: [
    presetUno(),
    presetUnuse(),
    presetForms(),
    presetIcons({
      scale: 1,
      warn: true,
    }),
  ],
  content: {
    pipeline: {
      include: [/.*\/unuse-ui\.js(.*)?$/, './**/*.vue'],
    },
  },
})
