import type { ButtonVariant } from '../button/button'

export const collapse = {
  wrapper: 'w-full flex flex-col gap-y-2',
  item: {
    base: '',
    size: 'text-sm',
    color: 'text-gray-500 dark:text-gray-400',
    padding: 'py-2',
  },
  transition: {
    enterActiveClass: 'overflow-hidden transition-height duration-200 ease-out',
    leaveActiveClass: 'overflow-hidden transition-height duration-200 ease-out',
  },
  default: {
    openIcon: 'i-ph-caret-down-bold',
    closeIcon: '',
    variant: 'soft' as ButtonVariant,
  },
}
