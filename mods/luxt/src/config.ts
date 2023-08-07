import type { Imports } from "../types/route.ts"

export interface LuxtConfig {
  imports: Imports
}
export const defineConfig = (config: LuxtConfig): LuxtConfig => config
