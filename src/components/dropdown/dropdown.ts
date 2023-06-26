import type { RouteLocationRaw } from 'vue-router'
import type { Avatar } from '~/components/avatar/avatar'
import type { Size } from '~/types'

export interface DropdownItem {
  to?: string | RouteLocationRaw
  label: string
  slot?: string
  icon?: string
  iconClass?: string
  avatar?: Partial<Avatar>
  shortcuts?: string[]
  isDisabled?: boolean
  onClick?: Function
}

export const dropdown = {
  wrapper: 'relative inline-flex text-left',
  container: 'z-20',
  width: 'w-48',
  height: '',
  background: 'bg-white dark:bg-dark-500',
  shadow: 'shadow-lg',
  rounded: 'rounded-md',
  ring: 'ring-1 ring-dark-100 dark:ring-dark-400',
  base: 'relative outline-none focus:outline-none overflow-y-auto scroll-py-1',
  divide: 'divide-y divide-dark-100 dark:divide-dark-400',
  padding: 'p-1',
  item: {
    base: 'group flex items-center gap-2 w-full',
    rounded: 'rounded-md',
    padding: 'px-2 py-1.5',
    size: 'text-sm',
    active: 'bg-dark-50 dark:bg-dark-500 text-dark-500 dark:text-white',
    inactive: 'text-dark-400 dark:text-dark-100',
    disabled: 'cursor-not-allowed opacity-50',
    icon: {
      base: 'flex-shrink-0 h-4 w-4',
      active: 'text-dark-300 dark:text-dark-200',
      inactive: 'text-dark-200 dark:text-dark-200',
    },
    avatar: {
      base: 'flex-shrink-0',
      size: '3xs' as Size,
    },
    shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5 ml-auto',
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
  },
}
