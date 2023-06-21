import { colors as defaultColors } from '@unocss/preset-uno/dist/colors'

export const colors: Colors = {
  ...defaultColors,
  fluo: {
    50: '#FAFFE6',
    100: '#F5FFCC',
    200: '#EAFF99',
    300: '#E0FF66',
    400: '#D5FF33',
    500: '#CBFF00',
    600: '#A2CC00',
    700: '#82A300',
    800: '#688200',
    900: '#536800',
    950: '#425300',
  },
  lisy: {
    50: '#F1F1FF',
    100: '#E3E4FF',
    200: '#C7C8FF',
    300: '#ACADFF',
    400: '#9091FF',
    500: '#7476FF',
    600: '#5D5ECC',
    700: '#464799',
    800: '#3B3C82',
    900: '#2F3068',
    950: '#262653',
  },
  primary: {
    50: 'var(--color-primary-50)',
    100: 'var(--color-primary-100)',
    200: 'var(--color-primary-200)',
    300: 'var(--color-primary-300)',
    400: 'var(--color-primary-400)',
    500: 'var(--color-primary-500)',
    600: 'var(--color-primary-600)',
    700: 'var(--color-primary-700)',
    800: 'var(--color-primary-800)',
    900: 'var(--color-primary-900)',
    950: 'var(--color-primary-950)',
  },
}

export type Colors = typeof defaultColors & {
  lisy: Record<string, string>
  fluo: Record<string, string>
  primary: Record<string, string>
}
