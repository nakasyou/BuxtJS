import type { Imports } from "../types/route.ts"
import { unplugin } from "../deps.ts"

export interface LuxtPlugin = (...args: any[]) => unplugin.UnpluginInstance

export interface LuxtConfig {
  imports: Imports
  plugins: LuxtPlugin[]
}
export const defineConfig = (config: LuxtConfig): LuxtConfig => config
