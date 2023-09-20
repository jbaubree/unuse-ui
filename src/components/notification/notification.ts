import type { Avatar } from '~/components/avatar/avatar'
import type { Button, ButtonColor, ButtonVariant } from '~/components/button/button'
import type { appConfig } from '~/config'
import type { Color, DeepPartial, Size } from '~/types'

export const notification = {
  wrapper: 'w-full pointer-events-auto',
  container: 'relative overflow-hidden',
  title: 'text-13px text-dark-500 dark:text-light-500',
  description: 'text-11px text-dark-200 dark:text-light-700',
  background: 'bg-white/10 dark:bg-black/10 backdrop-blur-30',
  shadow: 'shadow',
  rounded: 'rounded-5px',
  padding: 'p-5',
  ring: 'ring-1 ring-{color}-500 dark:ring-{color}-400',
  icon: {
    base: 'flex-shrink-0 w-5 h-5',
    color: 'text-{color}-500 dark:text-{color}-400',
  },
  avatar: {
    base: 'flex-shrink-0 self-center',
    size: 'sm' as Size,
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
      icon: 'icon-ph-x',
      color: 'dark' as ButtonColor,
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
  width: 'w-full sm:w-110',
  container: 'px-4 py-10 sm:px-10 sm:py-15 space-y-3 overflow-y-auto',
}

export interface NotificationAction extends Partial<Button> {
  click: () => void
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
  click?: (notification: Notification) => void
  callback?: () => void
  color?: 'gray' | Color
  ui?: DeepPartial<typeof appConfig.ui.notification>
}
