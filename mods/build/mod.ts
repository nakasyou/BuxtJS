import { type LuxtConfig } from "../luxt/mod.ts"

export interface BuildInit {
  config: LuxtConfig
  basePath: string
}
export const build = async (init: BuildInit) => {
  console.log("Building...")
}
