import type { ComponentResolver } from 'unplugin-vue-components/types'

export const UnuseResolver: ComponentResolver
  = (componentName) => {
    if (componentName.match(/^U[A-Z]/)) {
      return {
        name: componentName,
        from: 'unuse-ui',
      }
    }
  }
