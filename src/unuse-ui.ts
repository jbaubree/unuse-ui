import type { App, Plugin } from 'vue'

import UButton from './components/button/UButton.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UButton: typeof UButton
  }
}

const components = {
  UButton,
}

const plugin: Plugin = {
  install(app: App, _options) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}

export type {
  UButtonVariant,
} from './types'

export {
  UButton,
}

export { plugin as UnuseUi }
export default plugin
