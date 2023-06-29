import type { InputColor, InputVariant } from '~/components/input/input'
import { input } from '~/components/input/input'
import type { Color, Size } from '~/types'

export const textarea = {
  ...input,
  default: {
    size: 'sm' as Size,
    color: 'white' as Color | InputColor,
    variant: 'outline' as InputVariant | InputColor,
  },
}
