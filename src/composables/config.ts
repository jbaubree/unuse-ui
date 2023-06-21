import { useHead } from '@vueuse/head'
import type { RemovableRef } from '@vueuse/core'
import { APP_UI } from '~/symbols'
import { colors } from '~/preset'
import type { appConfig } from '~/config'

export function useAppUi() {
  return inject(APP_UI) as typeof appConfig.ui
}

export function useAppTheme(): {
  primaryColor: RemovableRef<string>
} {
  const primaryColor = useLocalStorage('unuse-ui-primary', 'fluo')

  const root = computed(() => `:root {
    ${Object.keys(colors.primary).map(key => `--color-primary-${key}: ${colors[primaryColor.value][key]};`).join('\n')}
  }`)

  useHead({
    style: [{ innerHTML: root }],
  })

  return {
    primaryColor,
  }
}
