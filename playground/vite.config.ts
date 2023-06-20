import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'

const config = defineConfig({
  plugins: [
    VueRouter({
      routeBlockLang: 'yaml',
      dts: resolve(__dirname, 'src/typed-router.d.ts'),
      routesFolder: resolve(__dirname, 'src/pages'),
    }),
    Vue(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables'],
      vueTemplate: true,
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        (componentName) => {
          if (componentName.match(/^U[A-Z]/)) {
            return {
              name: componentName,
              from: 'unuse-ui',
            }
          }
        },
      ],
    }),
    Unocss(),
  ],
  server: {
    port: 5550,
  },
})

export default config
