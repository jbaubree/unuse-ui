import type { App, Plugin } from 'vue'

import '@unocss/reset/tailwind.css'

import UIcon from './components/icon/UIcon.vue'
import UToggle from './components/toggle/UToggle.vue'

const components = {
  UIcon,
  UToggle,
}

declare module 'vue' {
  export interface GlobalComponents {
    UIcon: typeof import('unuse-ui')['UIcon']
    UToggle: typeof import('unuse-ui')['UToggle']
  }
}

const plugin: Plugin = {
  install(app: App, _options) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}

export {
  UIcon,
  UToggle,
}

export { plugin as UnuseUI }
export default plugin
