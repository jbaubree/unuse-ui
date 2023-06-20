import type { Color, Size } from '~/types'

export type ButtonColor = 'white' | 'gray' | 'black'
export type ButtonVariant = 'solid' | 'outline' | 'soft' | 'ghost' | 'link'

export interface Button {
  base: string
  font: string
  rounded: string
  size: Record<Size, string>
  gap: Record<Size, string>
  padding: Record<Size, string>
  square: Record<Size, string>
  color: Record<ButtonColor, Partial<Record<ButtonVariant, string>>>
  variant: Record<ButtonVariant, string>
  icon: {
    base: string
    size: Record<Size, string>
  }
  default: {
    size: Size
    variant: ButtonVariant
    color: Color | ButtonColor
    loadingIcon: string
  }
}

export const button: Button = {
  base: 'disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 transition-colors',
  font: 'font-medium',
  rounded: 'rounded-md',
  size: {
    '2xs': 'text-xs',
    'xs': 'text-xs',
    'sm': 'text-sm',
    'md': 'text-sm',
    'lg': 'text-sm',
    'xl': 'text-base',
  },
  gap: {
    '2xs': 'gap-x-1',
    'xs': 'gap-x-1.5',
    'sm': 'gap-x-1.5',
    'md': 'gap-x-2',
    'lg': 'gap-x-2.5',
    'xl': 'gap-x-2.5',
  },
  padding: {
    '2xs': 'px-2 py-1',
    'xs': 'px-2.5 py-1.5',
    'sm': 'px-2.5 py-1.5',
    'md': 'px-3 py-2',
    'lg': 'px-3.5 py-2.5',
    'xl': 'px-3.5 py-2.5',
  },
  square: {
    '2xs': 'p-1',
    'xs': 'p-1.5',
    'sm': 'p-1.5',
    'md': 'p-2',
    'lg': 'p-2.5',
    'xl': 'p-2.5',
  },
  color: {
    white: {
      solid: 'shadow-sm text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900',
      ghost: 'text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900',
    },
    gray: {
      solid: 'shadow-sm text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800',
      ghost: 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800',
      link: 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline',
    },
    black: {
      solid: 'shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white',
      link: 'text-gray-900 dark:text-white underline-offset-4 hover:underline',
    },
  },
  variant: {
    solid: 'shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400',
    outline: 'text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950',
    soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 dark:bg-{color}-950 dark:hover:bg-{color}-900',
    ghost: 'text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950',
    link: 'text-{color}-500 hover:text-{color}-600 dark:text-{color}-400 dark:hover:text-{color}-500 underline-offset-4 hover:underline',
  },
  icon: {
    base: 'flex-shrink-0',
    size: {
      '2xs': 'h-4 w-4',
      'xs': 'h-4 w-4',
      'sm': 'h-5 w-5',
      'md': 'h-5 w-5',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
  default: {
    size: 'sm',
    variant: 'solid',
    color: 'primary',
    loadingIcon: 'i-ph-spinner-gap-bold',
  },
}
