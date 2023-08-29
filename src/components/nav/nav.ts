import type { Size } from '~/types'

export const nav = {
  variant: {
    solid: {
      wrapper: 'relative flex flex-wrap rounded-5px p-5px bg-{color}-50 dark:bg-{color}-950 transition-colors',
      active: 'absolute rounded-3px bg-white dark:bg-black transition-all',
      item: {
        wrapper: 'relative inline-block flex-1',
        base: 'min-w-max text-13px flex cursor-pointer justify-center transition-colors',
        active: 'text-dark-500 dark:text-light-500',
        inactive: 'text-{color}-600 dark:text-{color}-400',
      },
      size: {
        '2xs': 'px-1.5 py-1.25',
        'xs': 'px-3 py-1.5',
        'sm': 'px-5 py-2',
        'md': 'px-6 py-2.25',
        'lg': 'px-7.5 py-2.5',
        'xl': 'px-8 py-2.5',
      },
    },
    light: {
      wrapper: 'relative bg-transparent flex gap-3.75',
      active: 'absolute translate-y--100% bg-pilot-500 dark:bg-pilot-400 transition-all',
      item: {
        wrapper: 'relative inline-block flex-1',
        base: 'min-w-max flex cursor-pointer justify-center transition-colors',
        active: 'text-pilot-500 dark:text-pilot-400',
        inactive: 'text-dark-200 dark:text-light-800',
      },
      size: {
        '2xs': 'px-2 py-4.75 text-13px',
        'xs': 'px-2 py-4.75 text-13px',
        'sm': 'px-2 py-4.75 text-13px',
        'md': 'px-2 py-4.75 text-base font-light',
        'lg': 'px-2 py-4.75 text-base font-light',
        'xl': 'px-2 py-4.75 text-base font-light',
      },
    },
  },
  default: {
    size: 'sm' as Size,
    variant: 'light' as 'solid' | 'light',
  },
}
