import type { Size } from '~/types'

export const kbd = {
  base: 'inline-flex items-center justify-center text-dark-500 dark:text-white',
  padding: 'px-1',
  size: {
    xs: 'h-4 min-w-[16px] text-[10px]',
    sm: 'h-5 min-w-[20px] text-[11px]',
    md: 'h-6 min-w-[24px] text-[12px]',
  },
  rounded: 'rounded',
  font: 'font-medium font-sans',
  background: 'bg-dark-500 dark:bg-dark-400',
  ring: 'ring-1 ring-dark-100 dark:ring-dark-300 ring-inset',
  default: {
    size: 'sm' as Size,
  },
}
