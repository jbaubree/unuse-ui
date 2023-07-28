import type { Color } from '~/types'

export const text = {
  text: 'text-{color}-500 dark:text-{color}-400',
  font: 'font-400',
  size: 'text-13px',
  color: {
    fluo: 'text-{color}-700 dark:text-{color}-400',
    cyan: 'text-{color}-700 dark:text-{color}-400',
    yellow: 'text-{color}-700 dark:text-{color}-400',
    silver: 'text-{color}-700 dark:text-{color}-400',
    dark: 'text-dark-500 dark:text-light-500',
  },
  default: {
    color: 'dark' as Color,
  },
}
