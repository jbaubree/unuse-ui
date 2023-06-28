import { colors } from './colors'

const safeAttrs = ['text', 'bg', 'border', 'ring']
const safeStates = ['hover', 'dark']

const attrsSafelist = Object.keys(colors).flatMap((color) => {
  return Object.keys((colors as any)[color]).flatMap((number) => {
    return safeAttrs.flatMap(attr => `${attr}-${color}-${number}`).map(el => el.replace(/-DEFAULT/g, ''))
  })
})
const statesSafelist = safeStates.flatMap(state => attrsSafelist.map(el => `${state}:${el}`))

export const safelist = [
  ...attrsSafelist,
  ...statesSafelist,
]
