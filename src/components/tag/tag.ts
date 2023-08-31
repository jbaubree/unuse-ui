import type { Color, Size } from '~/types'

export type TagVariant = 'solid' | 'light'

export const tag = {
  base: 'inline-flex items-center',
  rounded: 'rounded-full',
  font: {
    xs: 'font-medium',
    sm: 'font-medium',
    md: 'font-medium',
    lg: 'font-normal',
  },
  size: {
    xs: 'text-11px px-1.5 py-0.5',
    sm: 'text-13px px-2.5 py-1',
    md: 'text-13px px-3 py-1.25',
    lg: 'text-16px px-.5 py-.25',
  },
  color: {
    fluo: {
      light: 'bg-{color}-50 dark:bg-{color}-950 text-{color}-600 dark:text-{color}-300',
      solid: 'bg-{color}-600 dark:bg-{color}-300 text-light-500 dark:text-dark-500',
    },
    cyan: {
      light: 'bg-{color}-50 dark:bg-{color}-950 text-{color}-600 dark:text-{color}-300',
      solid: 'bg-{color}-600 dark:bg-{color}-300 text-light-500 dark:text-dark-500',
    },
    yellow: {
      light: 'bg-{color}-50 dark:bg-{color}-950 text-{color}-600 dark:text-{color}-300',
      solid: 'bg-{color}-600 dark:bg-{color}-300 text-light-500 dark:text-dark-500',
    },
    silver: {
      light: 'bg-{color}-50 dark:bg-{color}-950 text-{color}-600 dark:text-{color}-300',
      solid: 'bg-{color}-600 dark:bg-{color}-300 text-light-500 dark:text-dark-500',
    },
    dark: {
      light: 'bg-{color}-50 dark:bg-{color}-500 text-dark-500 dark:text-light-500',
      solid: 'bg-dark-500 dark:bg-light-500 text-white dark:text-dark-500',
    },
    light: {
      light: 'bg-{color}-300 dark:bg-{color}-600 text-{color}-800 dark:text-{color}-200',
      solid: 'text-dark-500 dark:text-light-500 bg-light-300 dark:bg-dark-500',
    },
  },
  variant: {
    solid: 'bg-{color}-500 dark:bg-{color}-400 text-light-500 dark:text-dark-500',
    light: 'bg-{color}-50 dark:bg-{color}-950 text-{color}-500 dark:text-{color}-400',
  },
  default: {
    size: 'sm' as Size,
    variant: 'light' as TagVariant,
    color: 'primary' as Color,
  },
}
