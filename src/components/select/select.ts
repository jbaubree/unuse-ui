import type { InputColor, InputVariant } from '~/components/input/input'
import { input } from '~/components/input/input'
import type { Color, Size } from '~/types'

export const select = {
  ...input,
  placeholder: 'text-dark-100 dark:text-light-900',
  default: {
    size: 'sm' as Size,
    color: 'white' as Color | InputColor,
    variant: 'outline' as InputVariant | InputColor,
    loadingIcon: 'i-ph-spinner-gap-bold',
    trailingIcon: 'i-ph-caret-down-thin',
  },
}
