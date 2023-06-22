import { colors as defaultColors } from '@unocss/preset-uno/dist/colors'

const light = {
  50: '#FFFFFF',
  100: '#FDFDFB',
  200: '#FAFBF8',
  300: '#F5F7F1',
  400: '#F1F2E9',
  500: '#ECEEE2',
  600: '#979891',
  700: '#797A74',
  800: '#61625D',
  900: '#4E4E4A',
  950: '#BDBEB5',
  DEFAULT: '#ECEEE2',
}
const dark = {
  50: '#E8E8EA',
  100: '#D2D2D5',
  200: '#A4A4AB',
  300: '#777782',
  400: '#494958',
  500: '#1C1C2E',
  600: '#161625',
  700: '#12121E',
  800: '#0E0E18',
  900: '#0B0B13',
  950: '#000000',
  DEFAULT: '#1C1C2E',
}
const bronze = {
  50: '#F8F1ED',
  100: '#F2E3DC',
  200: '#E5C8B8',
  300: '#D8AC95',
  400: '#CB9171',
  500: '#BE754E',
  600: '#985E3E',
  700: '#7A4B32',
  800: '#623C28',
  900: '#4E3020',
  950: '#3E261A',
  DEFAULT: '#BE754E',
}
const silver = {
  50: '#FAFAFA',
  100: '#F5F5F5',
  200: '#ECECEC',
  300: '#E2E2E2',
  400: '#D9D9D9',
  500: '#CFCFCF',
  600: '#A6A6A6',
  700: '#858585',
  800: '#6A6A6A',
  900: '#555555',
  950: '#444444',
  DEFAULT: '#CFCFCF',
}
const gold = {
  50: '#FCF8EE',
  100: '#FAF2DE',
  200: '#F5E5BD',
  300: '#EFD89B',
  400: '#EACB7A',
  500: '#E5BE59',
  600: '#B79847',
  700: '#927A39',
  800: '#75622E',
  900: '#5E4E25',
  950: '#4B3E1E',
  DEFAULT: '#E5BE59',
}
const pink = {
  50: '#FBEAF6',
  100: '#F8D5EC',
  200: '#F1ABD9',
  300: '#EA80C6',
  400: '#E356B3',
  500: '#DC2CA0',
  600: '#B02380',
  700: '#8D1C66',
  800: '#711652',
  900: '#5A1242',
  950: '#480E35',
  DEFAULT: '#DC2CA0',
}
const mauve = {
  50: '#F8EBFA',
  100: '#F1D6F6',
  200: '#E3AEEC',
  300: '#D685E3',
  400: '#C85DD9',
  500: '#BA34D0',
  600: '#952AA6',
  700: '#772285',
  800: '#5F1B6A',
  900: '#4C1655',
  950: '#3D1244',
  DEFAULT: '#BA34D0',
}
const blue = {
  50: '#EBEFFA',
  100: '#D7E0F5',
  200: '#B0C1EC',
  300: '#88A1E2',
  400: '#6182D9',
  500: '#3963CF',
  600: '#2E4FA6',
  700: '#253F85',
  800: '#1E326A',
  900: '#182855',
  950: '#132044',
  DEFAULT: '#3963CF',
}
const sky = {
  50: '#EAF7FC',
  100: '#D6EEF9',
  200: '#ADDDF2',
  300: '#83CDEC',
  400: '#5ABCE5',
  500: '#31ABDF',
  600: '#2789B2',
  700: '#1F6E8E',
  800: '#195872',
  900: '#14465B',
  950: '#103849',
  DEFAULT: '#31ABDF',
}
const purple = {
  50: '#F1EBFA',
  100: '#E2D6F6',
  200: '#C5AEEC',
  300: '#A985E3',
  400: '#8C5DD9',
  500: '#6F34D0',
  600: '#592AA6',
  700: '#472285',
  800: '#391B6A',
  900: '#2E1655',
  950: '#251244',
  DEFAULT: '#6F34D0',
}
const cyan = {
  50: '#E9FBFB',
  100: '#D4F7F7',
  200: '#A9EFEF',
  300: '#7DE8E8',
  400: '#52E0E0',
  500: '#27D8D8',
  600: '#1FADAD',
  700: '#198A8A',
  800: '#146E6E',
  900: '#105858',
  950: '#0D4646',
  DEFAULT: '#27D8D8',
}
const green = {
  50: '#E9F9EE',
  100: '#D3F3DE',
  200: '#A7E8BD',
  300: '#7ADC9C',
  400: '#4ED17B',
  500: '#22C559',
  600: '#1B9E47',
  700: '#167E39',
  800: '#12652E',
  900: '#0E5125',
  950: '#0B411E',
  DEFAULT: '#22C559',
}
const yellow = {
  50: '#FEFBE8',
  100: '#FEF7D1',
  200: '#FCEEA2',
  300: '#FBE674',
  400: '#FADD45',
  500: '#F9D417',
  600: '#C7AA12',
  700: '#9F880E',
  800: '#7F6D0B',
  900: '#665709',
  950: '#524607',
  DEFAULT: '#F9D417',
}
const orange = {
  50: '#FEF1E8',
  100: '#FCE2D0',
  200: '#FAC6A2',
  300: '#F7A973',
  400: '#F58D45',
  500: '#F27016',
  600: '#C25A12',
  700: '#9B480E',
  800: '#7C3A0B',
  900: '#632E09',
  950: '#4F2507',
  DEFAULT: '#F27016',
}
const red = {
  50: '#FBE9EB',
  100: '#F8D2D7',
  200: '#F1A5AF',
  300: '#E97886',
  400: '#E24B5E',
  500: '#DB1E36',
  600: '#AF182B',
  700: '#8C1322',
  800: '#700F1B',
  900: '#5A0C16',
  950: '#480A12',
  DEFAULT: '#DB1E36',
}
const fluo = {
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
  DEFAULT: '#CBFF00',
}
const pilot = {
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
  DEFAULT: '#7476FF',
}
const primary = {
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
  DEFAULT: 'var(--color-primary-500)',
}

export const colors: Colors = {
  inherit: defaultColors.inherit,
  current: defaultColors.current,
  transparent: defaultColors.transparent,
  black: defaultColors.black,
  white: defaultColors.white,
  bronze,
  fluo,
  gold,
  mauve,
  pilot,
  primary,
  silver,
  red,
  yellow,
  orange,
  green,
  sky,
  blue,
  purple,
  cyan,
  pink,
  light,
  dark,
  success: green,
  danger: green,
}

type ColorKey = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950'
type ColorRecord = Record<ColorKey, string> & {
  DEFAULT?: string
} | string

export type Colors = { [key in keyof typeof defaultColors]?: ColorRecord } & {
  [key in 'fluo' | 'pilot' | 'primary' | 'bronze' | 'silver' | 'gold' | 'mauve' | 'success' | 'danger']: ColorRecord
}
