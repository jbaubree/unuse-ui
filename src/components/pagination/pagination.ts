import type { Button } from '../button/button'
import type { Size } from '~/types'

export const pagination = {
  wrapper: 'flex items-center -space-x-px',
  base: '',
  rounded: 'first:rounded-l-3px last:rounded-r-3px',
  default: {
    size: 'xs' as Size,
    prevButton: {
      color: 'pilot',
      variant: 'ghost',
      icon: 'i-ph-caret-left',
    } as Partial<Button>,
    nextButton: {
      color: 'pilot',
      variant: 'ghost',
      icon: 'i-ph-caret-right',
    } as Partial<Button>,
  },
}
