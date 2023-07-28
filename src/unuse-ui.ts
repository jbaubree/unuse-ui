import { merge } from 'lodash-es'
import type { App } from 'vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'

import { createHead } from '@vueuse/head'

import UAvatar from './components/avatar/UAvatar.vue'
import UButton from './components/button/UButton.vue'
import UBreadcrumb from './components/breadcrumb/UBreadcrumb.vue'
import UCard from './components/card/UCard.vue'
import UCheckbox from './components/checkbox/UCheckbox.vue'
import UCollapse from './components/collapse/UCollapse.vue'
import UContainer from './components/container/UContainer.vue'
import UDatepicker from './components/datepicker/UDatepicker.vue'
import UDropdown from './components/dropdown/UDropdown.vue'
import UFileUpload from './components/file-upload/UFileUpload.vue'
import UFormGroup from './components/form-group/UFormGroup.vue'
import UIcon from './components/icon/UIcon.vue'
import UInput from './components/input/UInput.vue'
import ULinkCustom from './components/link/ULinkCustom.vue'
import UDialog from './components/dialog/UDialog.vue'
import UNav from './components/nav/UNav.vue'
import UNotification from './components/notification/UNotification.vue'
import UNotifications from './components/notification/UNotifications.vue'
import UPopover from './components/popover/UPopover.vue'
import UPagination from './components/pagination/UPagination.vue'
import URadio from './components/radio/URadio.vue'
import URadioGroup from './components/radio/URadioGroup.vue'
import USelect from './components/select/USelect.vue'
import USelectMenu from './components/select/USelectMenu.vue'
import USkeleton from './components/skeleton/USkeleton.vue'
import USlider from './components/slider/USlider.vue'
import UTable from './components/table/UTable.vue'
import UTag from './components/tag/UTag.vue'
import UText from './components/text/UText.vue'
import UTextarea from './components/textarea/UTextarea.vue'
import UToggle from './components/toggle/UToggle.vue'
import UTooltip from './components/tooltip/UTooltip.vue'
import UVerticalNavigation from './components/vertical-navigation/UVerticalNavigation.vue'
import { appConfig } from './config'
import { useAppTheme, useAppUi } from './composables/config'
import { useToast } from './composables/toast'
import { APP_UI } from './symbols'
import type { DeepPartial, PluginOptions, ResolvedPluginOptions } from './types'

const components = {
  UAvatar,
  UButton,
  UBreadcrumb,
  UCard,
  UCheckbox,
  UCollapse,
  UContainer,
  UDatepicker,
  UDialog,
  UDropdown,
  UFileUpload,
  UFormGroup,
  UIcon,
  UInput,
  ULinkCustom,
  UNav,
  UNotification,
  UNotifications,
  UPopover,
  UPagination,
  URadio,
  URadioGroup,
  USelect,
  USelectMenu,
  USkeleton,
  USlider,
  UTable,
  UTag,
  UText,
  UTextarea,
  UToggle,
  UTooltip,
  UVerticalNavigation,
}

declare module 'vue' {
  export interface GlobalComponents {
    UAvatar: typeof UAvatar
    UButton: typeof UButton
    UBreadcrumb: typeof UBreadcrumb
    UCard: typeof UCard
    UCheckbox: typeof UCheckbox
    UCollapse: typeof UCollapse
    UContainer: typeof UContainer
    UDatepicker: typeof UDatepicker
    UDialog: typeof UDialog
    UDropdown: typeof UDropdown
    UFileUpload: typeof UFileUpload
    UFormGroup: typeof UFormGroup
    UIcon: typeof UIcon
    UInput: typeof UInput
    ULinkCustom: typeof ULinkCustom
    UNav: typeof UNav
    UNotification: typeof UNotification
    UNotifications: typeof UNotifications
    UPopover: typeof UPopover
    UPagination: typeof UPagination
    URadio: typeof URadio
    URadioGroup: typeof URadioGroup
    USelect: typeof USelect
    USelectMenu: typeof USelectMenu
    USkeleton: typeof USkeleton
    USlider: typeof USlider
    UTable: typeof UTable
    UTag: typeof UTag
    UText: typeof UText
    UTextarea: typeof UTextarea
    UToggle: typeof UToggle
    UTooltip: typeof UTooltip
    UVerticalNavigation: typeof UVerticalNavigation
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
export * from './resolvers'

export {
  UAvatar,
  UButton,
  UBreadcrumb,
  UCard,
  UCheckbox,
  UCollapse,
  UContainer,
  UDatepicker,
  UDialog,
  UDropdown,
  UFileUpload,
  UFormGroup,
  UIcon,
  UInput,
  ULinkCustom,
  UNav,
  UNotification,
  UNotifications,
  UPopover,
  UPagination,
  URadio,
  URadioGroup,
  USelect,
  USelectMenu,
  USkeleton,
  USlider,
  UTable,
  UTag,
  UText,
  UTextarea,
  UToggle,
  UTooltip,
  UVerticalNavigation,
  useAppTheme,
  useAppUi,
  useToast,
}

export { plugin as UnuseUI }
export default plugin
