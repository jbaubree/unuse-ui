export const toggle = {
  wrapper: 'inline-flex items-center gap-5 cursor-pointer disabled:cursor-default',
  label: 'text-lg font-500 leading-5',
  button: {
    base: 'relative inline-flex flex-shrink-0 h-5 w-9 border-2 border-transparent rounded-full focus:outline-none',
    active: 'bg-primary-500 dark:bg-primary-400',
    disabled: 'opacity-50 cursor-not-allowed',
    inactive: 'bg-gray-200 dark:bg-gray-700',
  },
  slider: {
    base: 'relative border inline-block h-4 w-4 rounded-full bg-white dark:bg-gray-900 transform transition ease-in-out duration-200',
    active: 'translate-x-4 shadow border-white dark:border-gray-900',
    inactive: 'translate-x-0 border-gray-300 dark:border-gray-600',
  },
  icon: {
    base: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
    active: 'opacity-100 ease-in duration-200',
    inactive: 'opacity-0 ease-out duration-100',
    on: 'h-3 w-3 text-primary-500 dark:text-primary-400',
    off: 'h-3 w-3 text-gray-400 dark:text-gray-500',
  },
}
