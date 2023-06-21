import type { Preset } from 'unocss'
import { safelist } from './safelist'
import { colors } from './colors'

export function presetUnuse(): Preset {
  return {
    name: 'unuse-ui/preset',
    theme: {
      colors,
    },
    safelist,
  }
}

export { colors } from './colors'
export type { Colors } from './colors'
