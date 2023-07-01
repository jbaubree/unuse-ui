import type { RouteLocationRaw } from 'vue-router'
import type { appConfig } from '~/config'
import type { Color, Size } from '~/types'

export type ButtonColor = 'white' | 'gray' | 'black' | 'fluo'
export type ButtonVariant = 'solid' | 'outline' | 'soft' | 'ghost' | 'link'

export interface Button {
  type?: string
  isBlock?: boolean
  label?: string
  isLoading?: boolean
  isDisabled?: boolean
  isPadded?: boolean
  size?: Size
  color?: Color | ButtonColor
  variant?: ButtonVariant
  icon?: string
  loadingIcon?: string
  leadingIcon?: string
  trailingIcon?: string
  isTrailing?: boolean
  isLeading?: boolean
  to?: string | RouteLocationRaw
  target?: string
  ariaLabel?: string
  isSquare?: boolean
  isTruncate?: boolean
  ui?: Partial<typeof appConfig.ui.button>
}

export const button = {
  base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 transition-colors',
  font: 'font-medium',
  rounded: 'rounded-md',
  size: {
    '2xs': 'text-sm',
    'xs': 'text-sm',
    'sm': 'text-base',
    'md': 'text-base',
    'lg': 'text-base',
    'xl': 'text-md',
  } as Record<Size, string>,
  gap: {
    '2xs': 'gap-x-1',
    'xs': 'gap-x-1.5',
    'sm': 'gap-x-1.5',
    'md': 'gap-x-2',
    'lg': 'gap-x-2.5',
    'xl': 'gap-x-2.5',
  } as Record<Size, string>,
  padding: {
    '2xs': 'px-2 py-1',
    'xs': 'px-2.5 py-1.5',
    'sm': 'px-2.5 py-1.5',
    'md': 'px-3 py-2',
    'lg': 'px-3.5 py-2.5',
    'xl': 'px-3.5 py-2.5',
  } as Record<Size, string>,
  square: {
    '2xs': 'p-1',
    'xs': 'p-1.5',
    'sm': 'p-1.5',
    'md': 'p-2',
    'lg': 'p-2.5',
    'xl': 'p-2.5',
  } as Record<Size, string>,
  color: {
    white: {
      solid: 'shadow-sm ring-1 ring-inset ring-dark-100 dark:ring-dark-300 text-dark-900 dark:text-white bg-white hover:bg-dark-50 disabled:bg-white dark:bg-dark-900 dark:hover:bg-dark-800/50 dark:disabled:bg-dark-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
      ghost: 'text-dark-900 dark:text-white hover:bg-white dark:hover:bg-dark-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
    },
    fluo: {
      solid: 'shadow-sm text-black dark:text-dark-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
      outline: 'text-{color}-600 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
    },
    gray: {
      solid: 'shadow-sm ring-1 ring-inset ring-dark-100 dark:ring-dark-300 text-dark-700 dark:text-dark-200 bg-dark-50 hover:bg-dark-100 disabled:bg-dark-50 dark:bg-dark-800 dark:hover:bg-dark-700/50 dark:disabled:bg-dark-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
      ghost: 'text-dark-700 dark:text-dark-200 hover:text-dark-900 dark:hover:text-white hover:bg-dark-50 dark:hover:bg-dark-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
      link: 'text-dark-500 dark:text-dark-400 hover:text-dark-700 dark:hover:text-dark-200 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
    },
    black: {
      solid: 'shadow-sm text-white dark:text-dark-900 bg-dark-900 hover:bg-dark-800 disabled:bg-dark-900 dark:bg-white dark:hover:bg-dark-100 dark:disabled:bg-white focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
      link: 'text-dark-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
    },
  } as Record<ButtonColor, Partial<Record<ButtonVariant, string>>>,
  variant: {
    solid: 'shadow-sm text-white dark:text-dark-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400',
    outline: 'text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950',
    soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 dark:bg-{color}-950 dark:hover:bg-{color}-900',
    ghost: 'text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950',
    link: 'text-{color}-500 hover:text-{color}-600 dark:text-{color}-400 dark:hover:text-{color}-500 underline-offset-4 hover:underline',
  } as Record<ButtonVariant, string>,
  icon: {
    base: 'flex-shrink-0',
    size: {
      '2xs': 'h-4 w-4',
      'xs': 'h-4 w-4',
      'sm': 'h-5 w-5',
      'md': 'h-5 w-5',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    } as Record<Size, string>,
  },
  default: {
    size: 'sm' as Size,
    variant: 'solid' as ButtonVariant,
    color: 'primary' as Color | ButtonColor,
    loadingIcon: 'i-ph-spinner-gap-bold',
  },
}
