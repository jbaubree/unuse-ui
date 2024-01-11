import { radio } from '~/components/radio/radio'

export const checkbox = {
  ...radio,
  wrapper: 'relative flex flex-col items-start gap-3',
  base: `${radio.base} rounded`,
}
