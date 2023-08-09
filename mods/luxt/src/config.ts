import type { Imports } from "../types/route.ts"
import { unplugin } from "../deps.ts"

export type LuxtPlugin = (...args: any[]) => {
  unplugin: unplugin.UnpluginInstance,
  luxt: {
    
  }
}

export interface LuxtConfig {
  imports: Imports
  plugins?: LuxtPlugin[]
}
export const defineConfig = (config: LuxtConfig): LuxtConfig => config
