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
