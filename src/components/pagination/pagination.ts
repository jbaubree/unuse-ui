import type { Button } from '../button/button'
import type { Size } from '~/types'

export const pagination = {
  wrapper: 'flex items-center -space-x-px',
  base: '',
  rounded: 'first:rounded-l-md last:rounded-r-md',
  default: {
    size: 'sm' as Size,
    activeButton: {
      color: 'primary',
    } as Partial<Button>,
    inactiveButton: {
      color: 'white',
    } as Partial<Button>,
    prevButton: {
      color: 'white',
      icon: 'i-ph-caret-left-bold',
    } as Partial<Button>,
    nextButton: {
      color: 'white',
      icon: 'i-ph-caret-right-bold',
    } as Partial<Button>,
  },
}
