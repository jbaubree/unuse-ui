import type { Size } from '~/types'

export const verticalNavigation = {
  wrapper: 'relative',
  base: 'transition-all group relative flex items-center gap-2 outline-none focus:outline-none before:absolute before:inset-px before:rounded-3px',
  ring: 'before:content-[\'\']',
  padding: 'px-2.5 py-1.25',
  width: 'w-full',
  rounded: 'rounded-3px',
  font: '',
  size: 'text-13px',
  active: 'text-dark-500 dark:text-light-500 before:bg-light-400 dark:before:bg-dark-500',
  inactive: 'text-dark-500 dark:text-light-500 hover:before:bg-light-200 dark:hover:before:bg-dark-700',
  label: 'truncate relative',
  icon: {
    base: 'transition-colors flex-shrink-0 w-4 h-4',
    active: 'text-dark-500 dark:text-light-500',
    inactive: 'text-dark-500 dark:text-light-500',
  },
  avatar: {
    base: 'flex-shrink-0',
    size: '2xs' as Size,
  },
  tag: {
    base: 'transition-colors relative ms-auto inline-block py-0.25 px-1.25 text-11px rounded-3px -me-1 -my-0.5',
    active: 'bg-light-200 dark:bg-dark-600',
    inactive: 'bg-light-300 dark:bg-dark-500 text-dark-600 dark:text-white group-hover:bg-light-400 dark:group-hover:bg-dark-500',
  },
}
