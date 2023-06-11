import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'

const config = defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({ script: { defineModel: true, propsDestructure: true } }),
    dts({
      include: ['src/**'],
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/unuse-ui.ts'),
      name: 'unuse-ui',
      fileName: 'unuse-ui',
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})

export default config
