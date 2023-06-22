import type { Color, Size } from '~/types'

export type InputVariant = 'outline' | 'none'
export type InputColor = 'white' | 'gray'

export interface Input {
  wrapper: string
  base: string
  rounded: string
  placeholder: string
  size: Record<Size, string>
  gap: Record<Size, string>
  padding: Record<Size, string>
  leading: {
    padding: Record<Size, string>
  }
  trailing: {
    padding: Record<Size, string>
  }
  color: Record<InputColor, Partial<Record<InputVariant, string>>>
  variant: Record<InputVariant, string>
  icon: {
    base: string
    color: string
    size: Record<Size, string>
    leading: {
      wrapper: string
      pointer: string
      padding: Record<Size, string>
    }
    trailing: {
      wrapper: string
      pointer: string
      padding: Record<Size, string>
    }
  }
  default: {
    size: Size
    color: Color | InputColor
    variant: InputVariant
    loadingIcon: string
  }
}

export const input: Input = {
  wrapper: 'relative',
  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
  rounded: 'rounded-md',
  placeholder: 'placeholder-dark-400 dark:placeholder-dark-500',
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
    'sm': 'gap-x-2',
    'md': 'gap-x-2',
    'lg': 'gap-x-2',
    'xl': 'gap-x-2',
  },
  padding: {
    '2xs': 'px-2 py-1',
    'xs': 'px-2.5 py-1.5',
    'sm': 'px-2.5 py-1.5',
    'md': 'px-3 py-2',
    'lg': 'px-3.5 py-2.5',
    'xl': 'px-3.5 py-2.5',
  },
  leading: {
    padding: {
      '2xs': 'pl-7',
      'xs': 'pl-8',
      'sm': 'pl-9',
      'md': 'pl-10',
      'lg': 'pl-11',
      'xl': 'pl-12',
    },
  },
  trailing: {
    padding: {
      '2xs': 'pr-7',
      'xs': 'pr-8',
      'sm': 'pr-9',
      'md': 'pr-10',
      'lg': 'pr-11',
      'xl': 'pr-12',
    },
  },
  color: {
    white: {
      outline: 'shadow-sm bg-white dark:bg-dark-900 text-dark-900 dark:text-white ring-1 ring-inset ring-dark-300 dark:ring-dark-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
    },
    gray: {
      outline: 'shadow-sm bg-dark-50 dark:bg-dark-800 text-dark-900 dark:text-white ring-1 ring-inset ring-dark-300 dark:ring-dark-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
    },
  },
  variant: {
    outline: 'shadow-sm bg-transparent text-dark-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
    none: 'bg-transparent focus:ring-0 focus:shadow-none',
  },
  icon: {
    base: 'flex-shrink-0 text-dark-400 dark:text-dark-500',
    color: 'text-{color}-500 dark:text-{color}-400',
    size: {
      '2xs': 'h-4 w-4',
      'xs': 'h-4 w-4',
      'sm': 'h-5 w-5',
      'md': 'h-5 w-5',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
    leading: {
      wrapper: 'absolute inset-y-0 left-0 flex items-center',
      pointer: 'pointer-events-none',
      padding: {
        '2xs': 'pl-2',
        'xs': 'pl-2.5',
        'sm': 'pl-2.5',
        'md': 'pl-3',
        'lg': 'pl-3.5',
        'xl': 'pl-3.5',
      },
    },
    trailing: {
      wrapper: 'absolute inset-y-0 right-0 flex items-center',
      pointer: 'pointer-events-none',
      padding: {
        '2xs': 'pr-2',
        'xs': 'pr-2.5',
        'sm': 'pr-2.5',
        'md': 'pr-3',
        'lg': 'pr-3.5',
        'xl': 'pr-3.5',
      },
    },
  },
  default: {
    size: 'sm',
    color: 'white',
    variant: 'outline',
    loadingIcon: 'i-ph-spinner-gap-bold',
  },
}
