import path, { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { glob } from 'glob'

const entry = Object.fromEntries(
  glob
    .sync('src/components/*/index.ts')
    .map(file => [
      path.relative('src', file.slice(0, file.length - path.extname(file).length)),
      fileURLToPath(new URL(file, import.meta.url)),
    ]),
)

const config = defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({ script: { defineModel: true } }),
    dts({
      include: ['src/**'],
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dirs: [
        'src/composables',
      ],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
    }),
    Components({
      dts: 'src/components.d.ts',
    }),
    {
      name: 'post-process-rename-h',
      enforce: 'post',
      generateBundle(_options, bundle) {
        for (const [fileName, file] of Object.entries(bundle)) {
          if (file.type === 'chunk' && file.code && fileName.match(/^index-.*\.js$/)) {
            file.code = file.code.replace(/},\s*h\s*=\s*{/g, '}, hh = {')
            file.code = file.code.replace(/:\s*h\s*,/g, ': hh,')
          }
        }
      },
    },
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: {
        ...entry,
        index: fileURLToPath(new URL('src/unuse-ui.ts', import.meta.url)),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
})

export default config
