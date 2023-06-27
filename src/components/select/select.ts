import type { InputColor, InputVariant } from '~/components/input/input'
import { input } from '~/components/input/input'
import type { Color, Size } from '~/types'

export const select = {
  ...input,
  placeholder: 'text-dark-500 dark:text-white',
  default: {
    size: 'sm' as Size,
    color: 'white' as Color | InputColor,
    variant: 'outline' as InputVariant | InputColor,
    loadingIcon: 'i-heroicons-arrow-path-20-solid',
    trailingIcon: 'i-heroicons-chevron-down-20-solid',
  },
}
