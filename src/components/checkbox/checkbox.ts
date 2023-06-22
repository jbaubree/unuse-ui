export const checkbox = {
  wrapper: 'inline-flex items-center gap-3 cursor-pointer disabled:cursor-default',
  button: {
    base: 'h-4 w-4 transition-all border flex items-center justify-center',
    active: 'bg-primary-500 border-primary-500 dark:bg-primary-400 dark:border-primary-400',
    inactive: 'bg-white border-primary-400 dark:border-dark-700',
    rounded: 'rounded',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  icon: 'h-2.5 w-2.5 transition-colors text-white dark:text-dark-900',
  label: 'transition-colors text-dark-700 dark:text-dark-100 text-sm cursor-unset',
  required: 'text-red-500 dark:text-red-400',
}
