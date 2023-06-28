import type { Color, Size } from '~/types'

export type TagVariant = 'solid'

export const tag = {
  base: 'inline-flex items-center',
  rounded: 'rounded-md',
  font: 'font-medium',
  size: {
    xs: 'text-xs px-1.5 py-0.5',
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-2 py-1',
    lg: 'text-sm px-2.5 py-1.5',
  },
  variant: {
    solid: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-10 dark:ring-opacity-20',
  },
  default: {
    size: 'sm' as Size,
    variant: 'solid' as TagVariant,
    color: 'primary' as Color,
  },
}
