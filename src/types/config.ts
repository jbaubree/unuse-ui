import type { appConfig } from '~/config'
import type { Colors } from '~/preset'
import type { DeepPartial } from '~/types'

export interface PluginOptions {
  registerComponents: boolean
  appConfig: DeepPartial<typeof appConfig>
}

export interface ResolvedPluginOptions {
  registerComponents: boolean
  appConfig: typeof appConfig
}

export type Color = keyof Colors

export type Size = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
