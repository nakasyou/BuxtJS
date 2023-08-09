import { type LuxtConfig } from "../luxt/mod.ts"

export interface BuildInit {
  config: 
  basePath: string
}
export const build = async (init: BuildInit) => {
  console.log("Building...")
}
