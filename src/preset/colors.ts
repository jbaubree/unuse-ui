import { colors as defaultColors } from '@unocss/preset-uno/dist/colors'

export const colors: Colors = {
  ...defaultColors,
  primary: defaultColors.blue,
}

export type Colors = typeof defaultColors & {
  primary: Record<string, string>
}
