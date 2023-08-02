export const toggle = {
  wrapper: 'inline-flex items-center gap-3.75 cursor-pointer disabled:cursor-default',
  label: {
    base: 'leading-5 text-dark-500 dark:text-light-500',
    size: {
      sm: 'text-13px',
      md: '',
    },
  },
  button: {
    base: 'transition-colors relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full focus:outline-none',
    active: 'bg-primary-500 dark:bg-primary-400',
    disabled: 'opacity-50 cursor-not-allowed',
    inactive: 'bg-light-400 dark:bg-dark-500',
    size: {
      sm: 'h-4 w-7',
      md: 'h-5 w-9',
    },
  },
  slider: {
    base: 'relative border inline-block rounded-full bg-white dark:bg-black transform transition ease-in-out duration-200',
    active: 'shadow border-white dark:border-black',
    inactive: 'translate-x-0 border-pilot-100 dark:border-pilot-900',
    translate: {
      sm: 'translate-x-3',
      md: 'translate-x-4',
    },
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
    },
  },
  icon: {
    base: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
    active: 'opacity-100 ease-in duration-200',
    inactive: 'opacity-0 ease-out duration-100',
    on: 'text-primary-500 dark:text-primary-400',
    off: 'text-dark-500 dark:text-light-500',
    size: {
      sm: 'h-2 w-2',
      md: 'h-2.75 w-2.75',
    },
  },
  default: {
    size: 'md' as 'sm' | 'md',
  },
}
