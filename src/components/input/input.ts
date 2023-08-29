import type { Color, Size } from '~/types'

export type InputVariant = 'outline' | 'none'
export type InputColor = 'white'

export interface Input {
  wrapper: string
  base: string
  rounded: Record<Size, string>
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
    active: string
    inactive: string
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
    variant: InputVariant | InputColor
    loadingIcon: string
  }
}

export const input: Input = {
  wrapper: 'relative',
  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none border-0',
  placeholder: 'placeholder-dark-200 placeholder-text-13px dark:placeholder-light-700',
  rounded: {
    '2xs': 'rounded-3px',
    'xs': 'rounded-3px',
    'sm': 'rounded-3px',
    'md': 'rounded-5px',
    'lg': 'rounded-5px',
    'xl': 'rounded-5px',
  },
  size: {
    '2xs': 'text-11px',
    'xs': 'text-11px',
    'sm': 'text-13px leading-5',
    'md': 'text-13px leading-5',
    'lg': 'text-13px leading-5',
    'xl': 'text-base',
  },
  gap: {
    '2xs': 'gap-x-.75',
    'xs': 'gap-x-.75',
    'sm': 'gap-x-1.5',
    'md': 'gap-x-1.5',
    'lg': 'gap-x-2',
    'xl': 'gap-x-2',
  },
  padding: {
    '2xs': 'px-2 py-1',
    'xs': 'p-2',
    'sm': 'p-2.5',
    'md': 'p-3',
    'lg': 'px-5 py-4',
    'xl': 'px-5 py-4',
  },
  leading: {
    padding: {
      '2xs': 'pl-7.5',
      'xs': 'pl-7.5',
      'sm': 'pl-8.5',
      'md': 'pl-9.5',
      'lg': 'pl-9.5',
      'xl': 'pl-10.5',
    },
  },
  trailing: {
    padding: {
      '2xs': 'pr-8',
      'xs': 'pr-8',
      'sm': 'pr-9',
      'md': 'pr-10',
      'lg': 'pr-10',
      'xl': 'pr-11',
    },
  },
  color: {
    white: {
      outline: 'bg-white dark:bg-dark-900 text-dark-500 dark:text-light-500 ring-1 ring-inset ring-pilot-100 dark:ring-pilot-800 focus:ring-1 focus:ring-pilot-500 dark:focus:ring-pilot-400',
    },
  },
  variant: {
    outline: 'bg-transparent text-dark-500 dark:text-light-500 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-1 focus:ring-{color}-500 dark:focus:ring-{color}-400',
    none: 'bg-transparent focus:ring-0 focus:shadow-none',
  },
  icon: {
    base: 'flex-shrink-0',
    inactive: 'text-dark-100 dark:text-light-900',
    active: 'text-dark-500 dark:text-light-500',
    color: 'text-{color}-500 dark:text-{color}-400',
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3 w-3',
      'sm': 'h-4 w-4',
      'md': 'h-4 w-4',
      'lg': 'h-4 w-4',
      'xl': 'h-5 w-5',
    },
    leading: {
      wrapper: 'absolute inset-y-0 left-0 flex items-center',
      pointer: 'pointer-events-none',
      padding: {
        '2xs': 'pl-2.75',
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
        '2xs': 'pr-2.75',
        'xs': 'pr-2.5',
        'sm': 'pr-2.5',
        'md': 'pr-3',
        'lg': 'pr-3.5',
        'xl': 'pr-3.5',
      },
    },
  },
  default: {
    size: '2xs',
    color: 'white',
    variant: 'outline',
    loadingIcon: 'icon-ph-spinner-gap-bold',
  },
}
