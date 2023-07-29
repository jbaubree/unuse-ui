import type { Button } from '../button/button'
import type { Size } from '~/types'

export const pagination = {
  wrapper: 'flex items-center gap-2.5',
  btnWrapper: 'flex items-center -space-x-px',
  label: 'text-13px',
  base: '',
  rounded: 'first:rounded-l-3px last:rounded-r-3px',
  default: {
    size: 'xs' as Size,
    prevButton: {
      color: 'pilot',
      variant: 'ghost',
      icon: 'icon-ph-caret-left',
    } as Partial<Button>,
    nextButton: {
      color: 'pilot',
      variant: 'ghost',
      icon: 'icon-ph-caret-right',
    } as Partial<Button>,
  },
}
