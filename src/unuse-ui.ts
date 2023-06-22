import { merge } from 'lodash-es'
import type { App } from 'vue'
import '@unocss/reset/tailwind.css'
import { createHead } from '@vueuse/head'

import UButton from './components/button/UButton.vue'
import UBreadcrumb from './components/breadcrumb/UBreadcrumb.vue'
import UCheckbox from './components/checkbox/UCheckbox.vue'
import UFormGroup from './components/form-group/UFormGroup.vue'
import UIcon from './components/icon/UIcon.vue'
import UInput from './components/input/UInput.vue'
import UDialog from './components/dialog/UDialog.vue'
import UNav from './components/nav/UNav.vue'
import UToggle from './components/toggle/UToggle.vue'
import { appConfig } from './config'
import { useAppTheme, useAppUi } from './composables/config'
import { APP_UI } from './symbols'
import type { DeepPartial, PluginOptions, ResolvedPluginOptions } from './types'

const components = {
  UButton,
  UBreadcrumb,
  UCheckbox,
  UDialog,
  UFormGroup,
  UIcon,
  UInput,
  UNav,
  UToggle,
}

declare module 'vue' {
  export interface GlobalComponents {
    UButton: typeof UButton
    UBreadcrumb: typeof UBreadcrumb
    UCheckbox: typeof UCheckbox
    UDialog: typeof UDialog
    UFormGroup: typeof UFormGroup
    UIcon: typeof UIcon
    UInput: typeof UInput
    UNav: typeof UNav
    UToggle: typeof UToggle
  }
}

const configDefaults: ResolvedPluginOptions = {
  registerComponents: true,
  appConfig,
}

const plugin = {
  install(app: App, options: DeepPartial<PluginOptions> = {}) {
    const config: typeof appConfig = merge({}, configDefaults.appConfig, options.appConfig)

    app.use(createHead())

    if (options.registerComponents) {
      Object.entries(components).forEach(([name, component]) => {
        app.component(name, component)
      })
    }

    app.provide(APP_UI, config.ui)
  },
}

export {
  UButton,
  UBreadcrumb,
  UCheckbox,
  UDialog,
  UFormGroup,
  UIcon,
  UInput,
  UNav,
  UToggle,
  useAppTheme,
  useAppUi,
}

export { plugin as UnuseUI }
export default plugin
