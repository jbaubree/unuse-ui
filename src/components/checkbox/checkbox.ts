import { radio } from '~/components/radio/radio'

export const checkbox = {
  ...radio,
  wrapper: 'relative flex flex-col items-start',
  base: `${radio.base} rounded`,
}
