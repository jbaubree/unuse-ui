import type { appConfig } from '~/config'
import type { DeepPartial } from '~/types'

export interface PluginOptions {
  registerComponents: boolean
  appConfig: DeepPartial<typeof appConfig>
}

export interface ResolvedPluginOptions {
  registerComponents: boolean
  appConfig: typeof appConfig
}

export type Color = keyof typeof appConfig.ui.colors

export type Size = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
