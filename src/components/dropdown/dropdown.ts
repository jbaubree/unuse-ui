import type { RouteLocationRaw } from 'vue-router'
import type { Avatar } from '~/components/avatar/avatar'
import type { PopperOptions, Size } from '~/types'

export interface DropdownItem {
  to?: string | RouteLocationRaw
  label: string
  slot?: string
  icon?: string
  iconClass?: string
  avatar?: Partial<Avatar>
  isDisabled?: boolean
  onClick?: () => void
}

export const dropdown = {
  wrapper: 'relative inline-flex text-left',
  container: 'z-20',
  width: 'w-48',
  height: '',
  background: 'bg-white dark:bg-black',
  shadow: 'shadow-lg',
  rounded: 'rounded-5px',
  ring: 'ring-1 ring-light-400 dark:ring-dark-400',
  base: 'relative outline-none focus:outline-none overflow-y-auto scroll-py-1',
  divide: 'divide-y divide-light-400 dark:divide-dark-400',
  padding: 'p-1',
  item: {
    base: 'group flex items-center gap-2 w-full',
    rounded: 'rounded-3px',
    padding: 'px-2 py-1.5',
    size: 'text-13px',
    active: 'bg-light-300 dark:bg-dark-600',
    inactive: 'text-dark-500 dark:text-light-500',
    disabled: 'cursor-not-allowed opacity-50',
    icon: {
      base: 'flex-shrink-0 h-4 w-4',
      active: 'text-dark-500 dark:text-light-500',
      inactive: 'text-dark-500 dark:text-light-500',
    },
    avatar: {
      base: 'flex-shrink-0',
      size: 'xs' as Size,
    },
  },
  transition: {
    enterActiveClass: 'transition duration-100 ease-out',
    enterFromClass: 'transform scale-75 opacity-0',
    enterToClass: 'transform scale-100 opacity-100',
    leaveActiveClass: 'transition duration-75 ease-out',
    leaveFromClass: 'transform scale-100 opacity-100',
    leaveToClass: 'transform scale-75 opacity-0',
  },
  popper: {
    placement: 'bottom-end',
    strategy: 'fixed',
  } as PopperOptions,
}
