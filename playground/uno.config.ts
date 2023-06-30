import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss'
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
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Roboto',
          weights: [100, 300, 400, 500, 700, 900],
          italic: true,
        },
      },
    }),
  ],
  content: {
    pipeline: {
      include: [/.*\/unuse-ui\.js(.*)?$/, './**/*.vue'],
    },
  },
})
