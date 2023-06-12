import type { App, Plugin } from 'vue'

import '@unocss/reset/tailwind.css'

import UCheckbox from './components/checkbox/UCheckbox.vue'
import UIcon from './components/icon/UIcon.vue'
import UToggle from './components/toggle/UToggle.vue'

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

const plugin: Plugin = {
  install(app: App, _options) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}

export {
  UCheckbox,
  UIcon,
  UToggle,
}

export { plugin as UnuseUI }
export default plugin
