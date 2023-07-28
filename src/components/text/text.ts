import type { Color } from '~/types'

export const text = {
  font: 'font-400',
  size: 'text-13px',
  color: {
    base: 'transition-colors',
    default: 'text-{color}-500 dark:text-{color}-400',
    fluo: 'text-{color}-700 dark:text-{color}-400',
    cyan: 'text-{color}-700 dark:text-{color}-400',
    yellow: 'text-{color}-700 dark:text-{color}-400',
    silver: 'text-{color}-700 dark:text-{color}-400',
    dark: 'text-dark-500 dark:text-light-500',
    light: 'text-dark-200 dark:text-light-700',
  },
  default: {
    color: 'dark' as Color,
  },
}
