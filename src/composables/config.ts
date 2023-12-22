import type { RemovableRef } from '@vueuse/core'
import { APP_UI } from '~/symbols'
import type { colors } from '~/preset'
import type { appConfig } from '~/config'

export function useAppUi() {
  return inject(APP_UI) as typeof appConfig.ui
}

export function useAppTheme(): {
  primaryColor: RemovableRef<keyof typeof colors>
} {
  const primaryColor = useLocalStorage<keyof typeof colors>('unuse-ui-primary', 'fluo', { flush: 'post' })

  return {
    primaryColor,
  }
}
