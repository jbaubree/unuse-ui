import type { Size } from '~/types'

export interface NavItem {
  title: string
  value: string
}

export const nav = {
  wrapper: 'relative flex flex-wrap rounded p-5px bg-{color}-100',
  active: 'absolute rounded bg-white shadow transition-all',
  item: {
    wrapper: 'relative inline-block flex-1',
    base: 'min-w-max flex cursor-pointer justify-center rounded transition-colors',
    active: 'text-primary-500',
    inactive: 'text-dark-500',
  },
  size: {
    '2xs': 'px-1 py-.5',
    'xs': 'px-2 py-1',
    'sm': 'px-5 py-1.5',
    'md': 'px-5 py-1.5',
    'lg': 'px-7.5 py-2',
    'xl': 'px-7.5 py-2',
  },
  default: {
    size: 'md' as Size,
  },
}
