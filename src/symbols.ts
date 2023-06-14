import type { appConfig } from './config'

export const APP_UI = Symbol('APP_UI') as InjectionKey<typeof appConfig.ui>
