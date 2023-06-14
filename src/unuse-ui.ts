import { merge } from 'lodash-es'
import type { App } from 'vue'

import '@unocss/reset/tailwind.css'

import UCheckbox from './components/checkbox/UCheckbox.vue'
import UIcon from './components/icon/UIcon.vue'
import UToggle from './components/toggle/UToggle.vue'
import { appConfig } from './config'
import { APP_UI } from './symbols'
import type { DeepPartial, PluginOptions, ResolvedPluginOptions } from './types'

const components = {
  UCheckbox,
  UIcon,
  UToggle,
}

declare module 'vue' {
  export interface GlobalComponents {
    UCheckbox: typeof import('unuse-ui')['UCheckbox']
    UIcon: typeof import('unuse-ui')['UIcon']
    UToggle: typeof import('unuse-ui')['UToggle']
  }
}

const configDefaults: ResolvedPluginOptions = {
  registerComponents: true,
  appConfig,
}

const plugin = {
  install(app: App, options: DeepPartial<PluginOptions> = {}) {
    const theme: typeof appConfig = merge({}, configDefaults.appConfig, options.appConfig)

    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })

    app.provide(APP_UI, theme.ui)
  },
}

export {
  UCheckbox,
  UIcon,
  UToggle,
}

export { plugin as UnuseUI }
export default plugin
