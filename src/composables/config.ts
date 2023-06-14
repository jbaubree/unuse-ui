import type { appConfig } from '~/config'
import { APP_UI } from '~/symbols'

export function useAppUi() {
  return inject(APP_UI) as typeof appConfig.ui
}
