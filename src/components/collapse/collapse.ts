import type { ButtonVariant } from '../button/button'

export const collapse = {
  wrapper: 'w-full flex flex-col gap-y-2',
  item: {
    base: '',
    size: 'text-13px',
    color: 'text-dark-500 dark:text-light-500',
    padding: 'py-2',
  },
  transition: {
    enterActiveClass: 'overflow-hidden transition-height duration-200 ease-out',
    leaveActiveClass: 'overflow-hidden transition-height duration-200 ease-out',
  },
  default: {
    openIcon: 'icon-ph-caret-down-bold',
    closeIcon: '',
    variant: 'soft' as ButtonVariant,
  },
}
