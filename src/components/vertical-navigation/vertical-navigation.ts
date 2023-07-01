import type { Size } from '~/types'

export const verticalNavigation = {
  wrapper: 'relative',
  base: 'group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
  ring: 'focus-visible:ring-inset before:content-[\'\'] focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
  padding: 'px-3 py-1.5',
  width: 'w-full',
  rounded: 'rounded-md',
  font: 'font-medium',
  size: 'text-sm',
  active: 'text-dark-600 dark:text-white before:bg-dark-50 dark:before:bg-dark-500',
  inactive: 'text-dark-300 dark:text-dark-200 hover:text-dark-600 dark:hover:text-white hover:before:bg-dark-50/25 dark:hover:before:bg-gray-800/50',
  label: 'truncate relative',
  icon: {
    base: 'flex-shrink-0 w-4 h-4',
    active: 'text-dark-400 dark:text-dark-100',
    inactive: 'text-dark-200 dark:text-dark-300 group-hover:text-dark-400 dark:group-hover:text-dark-100',
  },
  avatar: {
    base: 'flex-shrink-0',
    size: '3xs' as Size,
  },
  badge: {
    base: 'relative ms-auto inline-block py-0.5 px-2 text-xs rounded-md -me-1 -my-0.5',
    active: 'bg-white dark:bg-dark-600',
    inactive: 'bg-dark-50 dark:bg-dark-500 text-dark-600 dark:text-white group-hover:bg-white dark:group-hover:bg-gray-900',
  },
}
