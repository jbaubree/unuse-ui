import type { RemovableRef } from '@vueuse/core'
import type { ComputedRef } from 'vue'
import { colors } from '~/preset'
import { APP_UI } from '~/symbols'
import type { appConfig } from '~/config'

export function useAppUi() {
  return inject(APP_UI) as typeof appConfig.ui
}

export function useAppTheme(): {
  primaryColor: RemovableRef<keyof typeof colors>
  root: ComputedRef<string>
} {
  const primaryColor = useLocalStorage<keyof typeof colors>('unuse-ui-primary', 'fluo')

  const hexToRgb = (hex: string) => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(shorthandRegex, (_, r, g, b) => {
      return r + r + g + g + b + b
    })
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? `${Number.parseInt(result[1], 16)}, ${Number.parseInt(result[2], 16)}, ${Number.parseInt(result[3], 16)}`
      : null
  }

  const root = computed(() => `:root {
    ${Object.keys(colors.primary).map(key => `--color-primary-${key}: ${hexToRgb(colors[primaryColor.value]?.[key])};`).join('\n')}
  }`)

  return {
    primaryColor,
    root,
  }
}
