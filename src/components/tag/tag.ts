import type { Color, Size } from '~/types'

export type TagVariant = 'solid'

export const tag = {
  base: 'inline-flex items-center',
  rounded: 'rounded-full',
  font: 'font-medium',
  size: {
    xs: 'text-11px px-1.5 py-0.5',
    sm: 'text-13px px-2.5 py-1',
    md: 'text-13px px-3 py-1.25',
    lg: 'text-13px px-4 py-1.75',
  },
  variant: {
    solid: 'bg-{color}-50 dark:bg-{color}-950 text-{color}-500 dark:text-{color}-400',
  },
  default: {
    size: 'sm' as Size,
    variant: 'solid' as TagVariant,
    color: 'primary' as Color,
  },
}
