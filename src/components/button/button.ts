import type { RouteLocationRaw } from 'vue-router'
import type { appConfig } from '~/config'
import type { Color, DeepPartial, Size } from '~/types'

export type ButtonColor = 'dark' | 'fluo' | 'light'
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
  ui?: DeepPartial<typeof appConfig.ui.button>
}

export const button = {
  base: 'outline-none focus:outline-none focus-visible:outline-0 flex-shrink-0 transition-colors',
  disabled: 'disabled:cursor-not-allowed disabled:opacity-20',
  custom: '',
  font: 'font-base',
  rounded: 'rounded-5px',
  size: {
    '2xs': 'text-10px',
    'xs': 'text-11px',
    'sm': 'text-xs',
    'md': 'text-13px',
    'lg': 'text-base',
    'xl': 'text-base',
  } as Record<Size, string>,
  gap: {
    '2xs': 'gap-x-.75',
    'xs': 'gap-x-1',
    'sm': 'gap-x-1.25',
    'md': 'gap-x-1.5',
    'lg': 'gap-x-1.75',
    'xl': 'gap-x-2',
  } as Record<Size, string>,
  padding: {
    '2xs': 'px-2.5 py-1.25',
    'xs': 'px-2.5 py-1.25',
    'sm': 'px-2.5 py-1.25',
    'md': 'px-5 py-2.5',
    'lg': 'px-7.5 py-3.75',
    'xl': 'px-5 py-2.5',
  } as Record<Size, string>,
  square: {
    padding: {
      '2xs': 'p-.75',
      'xs': 'p-1',
      'sm': 'p-1',
      'md': 'p-1.25',
      'lg': 'p-2',
      'xl': 'p-2',
    } as Record<Size, string>,
    rounded: 'rounded-4px',
  },
  color: {
    fluo: {
      solid: 'text-dark-500 bg-{color}-500 hover:bg-{color}-600 disabled:hover:bg-{color}-500 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-300 dark:disabled:hover:bg-{color}-400 dark:disabled:bg-{color}-400',
      outline: 'text-{color}-700 dark:text-{color}-400 hover:text-dark-500 disabled:hover:text-{color}-700 hover:bg-{color}-500 disabled:hover:bg-transparent dark:hover:bg-{color}-400 dark:disabled:hover:bg-transparent ring-1 ring-{color}-700 hover:ring-{color}-500 disabled:hover:ring-{color}-700 dark:ring-{color}-400',
      soft: 'text-dark-500 dark:text-{color}-300 bg-{color}-50 hover:bg-{color}-100 disabled:hover:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:hover:bg-{color}-950',
      ghost: 'text-dark-500 dark:text-{color}-400 hover:bg-{color}-100 disabled:hover:bg-transparent dark:hover:bg-{color}-900 dark:disabled:hover:bg-transparent',
      link: 'text-{color}-600 dark:text-{color}-400 underline-offset-4 hover:underline disabled:hover:no-underline',
    },
    cyan: {
      outline: 'text-{color}-700 dark:text-{color}-400 hover:text-dark-500 disabled:hover:text-{color}-700 hover:bg-{color}-500 disabled:hover:bg-transparent dark:hover:bg-{color}-400 dark:disabled:hover:bg-transparent ring-1 ring-{color}-700 hover:ring-{color}-500 disabled:hover:ring-{color}-700 dark:ring-{color}-400',
      solid: 'text-dark-500 bg-{color}-500 hover:bg-{color}-600 disabled:hover:bg-{color}-500 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-300 dark:disabled:hover:bg-{color}-400 dark:disabled:bg-{color}-400',
      soft: 'text-dark-500 dark:text-{color}-300 bg-{color}-50 hover:bg-{color}-100 disabled:hover:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:hover:bg-{color}-950',
      ghost: 'text-dark-500 dark:text-{color}-400 hover:bg-{color}-100 disabled:hover:bg-transparent dark:hover:bg-{color}-900 dark:disabled:hover:bg-transparent',
      link: 'text-{color}-600 dark:text-{color}-400 underline-offset-4 hover:underline disabled:hover:no-underline',
    },
    yellow: {
      outline: 'text-{color}-700 dark:text-{color}-400 hover:text-dark-500 disabled:hover:text-{color}-700 hover:bg-{color}-500 disabled:hover:bg-transparent dark:hover:bg-{color}-400 dark:disabled:hover:bg-transparent ring-1 ring-{color}-700 hover:ring-{color}-500 disabled:hover:ring-{color}-700 dark:ring-{color}-400',
      solid: 'text-dark-500 bg-{color}-500 hover:bg-{color}-600 disabled:hover:bg-{color}-500 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-300 dark:disabled:hover:bg-{color}-400 dark:disabled:bg-{color}-400',
      soft: 'text-dark-500 dark:text-{color}-300 bg-{color}-50 hover:bg-{color}-100 disabled:hover:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:hover:bg-{color}-950',
      ghost: 'text-dark-500 dark:text-{color}-400 hover:bg-{color}-100 disabled:hover:bg-transparent dark:hover:bg-{color}-900 dark:disabled:hover:bg-transparent',
      link: 'text-{color}-600 dark:text-{color}-400 underline-offset-4 hover:underline disabled:hover:no-underline',
    },
    silver: {
      outline: 'text-{color}-700 dark:text-{color}-400 hover:text-dark-500 disabled:hover:text-{color}-700 hover:bg-{color}-500 disabled:hover:bg-transparent dark:hover:bg-{color}-400 dark:disabled:hover:bg-transparent ring-1 ring-{color}-700 hover:ring-{color}-500 disabled:hover:ring-{color}-700 dark:ring-{color}-400',
      solid: 'text-dark-500 bg-{color}-500 hover:bg-{color}-600 disabled:hover:bg-{color}-500 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-300 dark:disabled:hover:bg-{color}-400 dark:disabled:bg-{color}-400',
      soft: 'text-silver-600 dark:text-{color}-300 bg-{color}-50 hover:bg-{color}-100 disabled:hover:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:hover:bg-{color}-950',
      ghost: 'text-dark-500 dark:text-{color}-400 hover:bg-{color}-100 disabled:hover:bg-transparent dark:hover:bg-{color}-900 dark:disabled:hover:bg-transparent',
      link: 'text-{color}-600 dark:text-{color}-400 underline-offset-4 hover:underline disabled:hover:no-underline',
    },
    dark: {
      solid: 'text-white dark:text-dark-500 bg-dark-500 hover:bg-dark-400 disabled:hover:bg-dark-300 disabled:bg-dark-500 dark:bg-light-500 dark:hover:bg-light-300 dark:disabled:hover:bg-light-500 dark:disabled:bg-light-500',
      outline: 'text-dark-500 dark:text-light-500 hover:text-white disabled:hover:text-dark-500 dark:hover:text-dark-500 dark:disabled:hover:text-light-500 hover:bg-{color}-500 disabled:hover:bg-transparent dark:hover:bg-light-500 dark:disabled:hover:bg-transparent hover:text-dark-500 ring-1 ring-{color}-700 hover:ring-ligh-500 dark:ring-light-500',
      soft: 'text-dark-500 dark:text-light-500 bg-{color}-50 hover:bg-{color}-100 disabled:hover:bg-{color}-50 dark:bg-light-800 dark:hover:bg-light-700 dark:disabled:hover:bg-light-800',
      ghost: 'text-dark-500 dark:text-light-500 hover:bg-dark-50 disabled:hover:bg-transparent dark:hover:bg-light-900 dark:disabled:hover:bg-transparent',
      link: 'text-dark-600 dark:text-light-400 underline-offset-4 hover:underline disabled:hover:no-underline',
    },
    light: {
      solid: 'text-dark-500 dark:text-light-500 bg-light-300 hover:bg-light-400 disabled:hover:bg-light-300 disabled:bg-light-300 dark:bg-dark-500 dark:hover:bg-light-900 dark:disabled:hover:bg-dark-500 dark:disabled:bg-dark-500',
    },
  } as Record<ButtonColor, Partial<Record<ButtonVariant, string>>>,
  variant: {
    solid: 'text-white dark:text-dark-500 bg-{color}-500 hover:bg-{color}-600 disabled:hover:bg-{color}-500 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-300 dark:disabled:hover:bg-{color}-400 dark:disabled:bg-{color}-400',
    outline: 'text-{color}-500 dark:text-{color}-400 hover:text-white disabled:hover:text-{color}-500 dark:hover:text-dark-500 dark:disabled:hover:text-{color}-400 hover:bg-{color}-500 disabled:hover:bg-transparent dark:hover:bg-{color}-400 dark:disabled:hover:bg-transparent ring-1 ring-{color}-500 dark:ring-{color}-400',
    soft: 'text-{color}-500 dark:text-{color}-300 bg-{color}-50 hover:bg-{color}-100 disabled:hover:bg-{color}-50 dark:bg-{color}-950 dark:disabled:hover:bg-{color}-950 dark:hover:bg-{color}-900',
    ghost: 'text-{color}-500 dark:text-{color}-400 hover:bg-{color}-100 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent dark:hover:bg-{color}-900',
    link: 'text-{color}-500 dark:text-{color}-400 underline-offset-4 hover:underline disabled:hover:no-underline',
  } as Record<ButtonVariant, string>,
  icon: {
    base: 'flex-shrink-0',
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-3.75 w-3.75',
      'md': 'h-4.75 w-4.75',
      'lg': 'h-5.5 w-5.5',
      'xl': 'h-6.25 w-6.25',
    } as Record<Size, string>,
  },
  default: {
    size: 'md' as Size,
    variant: 'solid' as ButtonVariant,
    color: 'primary' as Color | ButtonColor,
    loadingIcon: 'icon-ph-spinner-gap-bold',
  },
}
