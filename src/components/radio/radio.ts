export const radio = {
  wrapper: 'relative flex items-start',
  base: 'h-4 w-4 text-primary-500 dark:text-primary-400 focus-visible:ring-2 focus-visible:ring-offset-2 bg-white dark:bg-dark-900 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark-900 border-dark-200 dark:border-dark-500 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
  label: 'font-medium text-dark-300 dark:text-dark-100',
  required: 'text-red-500 dark:text-red-400',
  help: 'text-dark-500 dark:text-dark-400',
}

export const radioGroup = {
  wrapper: 'relative w-full',
  space: 'space-y-2',
  selectedIcon: {
    wrapper: 'flex items-center justify-center bg-white dark:bg-dark-500',
    padding: 'p-1.5',
    rounded: 'rounded-full',
    base: 'h-4 w-4 text-dark-600 dark:text-white flex-shrink-0',
  },
  item: {
    wrapper: 'w-full flex items-center justify-between',
    base: 'flex flex-col items-start',
    title: {
      base: 'font-medium',
      active: 'text-white dark:text-dark-900',
      inactive: 'text-dark-600 dark:text-dark-200',
    },
    subtitle: {
      base: 'inline text-left',
      active: 'text-light-200 dark:text-dark-600',
      inactive: 'text-dark-200 dark:text-dark-100',
    },
  },
  default: {
    selectedIcon: 'i-ph-check-bold',
  },
}
