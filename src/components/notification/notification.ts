import type { Avatar } from '~/components/avatar/avatar'
import type { Button, ButtonColor, ButtonVariant } from '~/components/button/button'
import type { appConfig } from '~/config'
import type { Color, Size } from '~/types'

export const notification = {
  wrapper: 'w-full pointer-events-auto',
  container: 'relative overflow-hidden',
  title: 'text-sm font-medium text-gray-900 dark:text-white',
  description: 'mt-1 text-sm leading-5 text-gray-500 dark:text-gray-400',
  background: 'bg-white dark:bg-gray-900',
  shadow: 'shadow-lg',
  rounded: 'rounded-lg',
  padding: 'p-4',
  ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
  icon: {
    base: 'flex-shrink-0 w-5 h-5',
    color: 'text-{color}-500 dark:text-{color}-400',
  },
  avatar: {
    base: 'flex-shrink-0 self-center',
    size: 'md' as Size,
  },
  progress: {
    base: 'absolute bottom-0 end-0 start-0 h-1',
    background: 'bg-{color}-500 dark:bg-{color}-400',
  },
  transition: {
    enterActiveClass: 'transform ease-out duration-300 transition',
    enterFromClass: 'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2',
    enterToClass: 'translate-y-0 opacity-100 sm:translate-x-0',
    leaveActiveClass: 'transition ease-in duration-100',
    leaveFromClass: 'opacity-100',
    leaveToClass: 'opacity-0',
  },
  default: {
    color: 'primary' as Color,
    icon: '',
    closeButton: {
      icon: 'i-ph-x-bold',
      color: 'gray' as ButtonColor,
      variant: 'link' as ButtonVariant,
      padded: false,
    },
    actionButton: {
      size: 'xs' as Size,
      color: 'white' as Color,
    },
  },
}

export const notifications = {
  wrapper: 'fixed flex flex-col justify-end z-[55]',
  position: 'bottom-0 end-0',
  width: 'w-full sm:w-96',
  container: 'px-4 sm:px-6 py-6 space-y-3 overflow-y-auto',
}

export interface NotificationAction extends Partial<Button> {
  click: Function
}

export interface Notification {
  id: string
  title: string
  description?: string
  icon?: string
  avatar?: Avatar
  closeButton?: Button
  timeout?: number
  actions?: NotificationAction[]
  click?: Function
  callback?: Function
  color?: 'gray' | Color
  ui?: Partial<typeof appConfig.ui.notification>
}
