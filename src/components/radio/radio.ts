export const radio = {
  wrapper: 'relative flex items-start',
  base: 'h-3.75 w-3.75 transition-colors outline-none focus:outline-none focus:ring-none cursor-pointer text-pilot-500 dark:text-pilot-400 bg-white dark:bg-black dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent border-light-500 dark:border-dark-400 disabled:opacity-50 disabled:cursor-not-allowed',
  label: 'text-dark-500 dark:text-light-500',
  required: 'text-red-500 dark:text-red-400',
}

export const radioGroup = {
  wrapper: 'relative w-full',
  space: 'space-y-2.5',
  selectedIcon: {
    wrapper: 'flex items-center justify-center bg-{color}-500 dark:bg-{color}-400',
    padding: 'p-1.5',
    rounded: 'rounded-full',
    base: 'h-2.5 w-2.5 text-dark-500 dark:text-light-500 flex-shrink-0',
  },
  item: {
    wrapper: 'w-full flex items-center gap-3',
    contentWrapper: 'w-full flex items-center justify-between',
    base: 'flex flex-col items-start',
    icon: {
      wrapper: 'flex items-center justify-center bg-{color}-500 dark:bg-{color}-400',
      padding: 'p-2',
      rounded: 'rounded-3px',
      base: 'h-4.5 w-4.5 text-dark-500 dark:text-light-500 flex-shrink-0',
    },
    title: {
      base: 'font-300 text-xl transition-colors',
      active: 'text-dark-500 dark:text-light-500',
      inactive: 'text-dark-500 dark:text-light-500',
    },
    subtitle: {
      base: 'inline text-left text-13px transition-colors',
      active: 'text-dark-500 dark:text-light-500',
      inactive: 'text-dark-200 dark:text-light-700',
    },
  },
  default: {
    selectedIcon: 'i-ph-check-bold',
  },
}
