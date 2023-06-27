import type { appConfig } from '~/config'
import type { Color, Size } from '~/types'

export interface Avatar {
  src?: string | boolean
  alt?: string
  text?: string
  size?: Size
  chipColor?: Color
  chipVariant?: string
  chipPosition?: string
  ui?: Partial<typeof appConfig.ui.checkbox>
}

export const avatar = {
  wrapper: 'relative inline-flex items-center justify-center',
  background: 'bg-gray-100 dark:bg-gray-800',
  rounded: 'rounded-full',
  placeholder: 'font-medium leading-none text-gray-900 dark:text-white truncate',
  size: {
    '3xs': 'h-4 w-4 text-[8px]',
    '2xs': 'h-5 w-5 text-[10px]',
    'xs': 'h-6 w-6 text-[11px]',
    'sm': 'h-8 w-8 text-xs',
    'md': 'h-10 w-10 text-sm',
    'lg': 'h-12 w-12 text-base',
    'xl': 'h-14 w-14 text-lg',
    '2xl': 'h-16 w-16 text-xl',
    '3xl': 'h-20 w-20 text-2xl',
  } as Record<Size, string>,
  chip: {
    base: 'absolute block rounded-full ring-1 ring-white dark:ring-gray-900',
    background: 'bg-{color}-500 dark:bg-{color}-400',
    position: {
      'top-right': 'top-0 right-0',
      'bottom-right': 'bottom-0 right-0',
      'top-left': 'top-0 left-0',
      'bottom-left': 'bottom-0 left-0',
    },
    size: {
      '3xs': 'h-1 w-1',
      '2xs': 'h-1 w-1',
      'xs': 'h-1.5 w-1.5',
      'sm': 'h-2 w-2',
      'md': 'h-2.5 w-2.5',
      'lg': 'h-3 w-3',
      'xl': 'h-3.5 w-3.5',
      '2xl': 'h-3.5 w-3.5',
      '3xl': 'h-4 w-4',
    },
  },
  default: {
    size: 'sm' as Size,
    chipPosition: 'top-right',
  },
}
