import type { LuxtConfig } from "./config.ts"
import * as fs from "std/fs/mod.ts"
import * as path from "std/path/mod.ts"

export interface CreateImportsOptions {
  basePath: string
  config: LuxtConfig
}
export const createImports = async (options: CreateImportsOptions) => {
  const routeGlob = path.join(options.basePath, "app", "**", "route.{js,ts,jsx,tsx}")
  const getRoutesPromises: Promise<void> = []
  for await (const entry of fs.expandGlob(routeGlob)) {
    getRoutesPromises.push((async () => {
      console.log(entry)
    })())
  }
  await Promise.all(getRoutesPromises)
}
