import { merge } from 'lodash-es'
import type { App } from 'vue'
import '@unocss/reset/tailwind.css'
import { createHead } from '@vueuse/head'

import UAvatar from './components/avatar/UAvatar.vue'
import UButton from './components/button/UButton.vue'
import UBreadcrumb from './components/breadcrumb/UBreadcrumb.vue'
import UCheckbox from './components/checkbox/UCheckbox.vue'
import UDropdown from './components/dropdown/UDropdown.vue'
import UFormGroup from './components/form-group/UFormGroup.vue'
import UIcon from './components/icon/UIcon.vue'
import UInput from './components/input/UInput.vue'
import UKbd from './components/kbd/UKbd.vue'
import ULinkCustom from './components/link/ULinkCustom.vue'
import UDialog from './components/dialog/UDialog.vue'
import UNav from './components/nav/UNav.vue'
import UPagination from './components/pagination/UPagination.vue'
import UToggle from './components/toggle/UToggle.vue'
import { appConfig } from './config'
import { useAppTheme, useAppUi } from './composables/config'
import { APP_UI } from './symbols'
import type { DeepPartial, PluginOptions, ResolvedPluginOptions } from './types'

const components = {
  UAvatar,
  UButton,
  UBreadcrumb,
  UCheckbox,
  UDialog,
  UDropdown,
  UFormGroup,
  UIcon,
  UInput,
  UKbd,
  ULinkCustom,
  UNav,
  UPagination,
  UToggle,
}

declare module 'vue' {
  export interface GlobalComponents {
    UAvatar: typeof UAvatar
    UButton: typeof UButton
    UBreadcrumb: typeof UBreadcrumb
    UCheckbox: typeof UCheckbox
    UDialog: typeof UDialog
    UDropdown: typeof UDropdown
    UFormGroup: typeof UFormGroup
    UIcon: typeof UIcon
    UInput: typeof UInput
    UKbd: typeof UKbd
    ULinkCustom: typeof ULinkCustom
    UNav: typeof UNav
    UPagination: typeof UPagination
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

export * from './types'
export * from './preset'

export {
  UAvatar,
  UButton,
  UBreadcrumb,
  UCheckbox,
  UDialog,
  UDropdown,
  UFormGroup,
  UIcon,
  UInput,
  UKbd,
  ULinkCustom,
  UNav,
  UPagination,
  UToggle,
  useAppTheme,
  useAppUi,
}

export { plugin as UnuseUI }
export default plugin
