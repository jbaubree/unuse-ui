import { colors as defaultColors } from '@unocss/preset-uno/dist/colors'

interface Colors {
  [key: string]: Colors & {
    DEFAULT?: string
  } | string
}

export const colors: Colors = {
  ...defaultColors,
  primary: defaultColors.blue,
}
