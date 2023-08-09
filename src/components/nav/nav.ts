import type { Size } from '~/types'

export const nav = {
  wrapper: 'relative flex flex-wrap rounded-5px p-5px bg-{color}-50 dark:bg-{color}-950 transition-colors',
  active: 'absolute rounded-3px bg-white dark:bg-black transition-all',
  item: {
    wrapper: 'relative inline-block flex-1',
    base: 'min-w-max text-13px flex cursor-pointer justify-center transition-colors',
    active: 'text-dark-500 dark:text-light-500',
    inactive: 'text-{color}-500 dark:text-{color}-400',
  },
  size: {
    '2xs': 'px-1.5 py-1.25',
    'xs': 'px-3 py-1.5',
    'sm': 'px-5 py-2',
    'md': 'px-6 py-2.25',
    'lg': 'px-7.5 py-2.5',
    'xl': 'px-8 py-2.5',
  },
  default: {
    size: 'sm' as Size,
  },
}
