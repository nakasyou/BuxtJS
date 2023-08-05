import type { LuxtConfig } from "./config.ts"
import * as fs from "std/fs/mod.ts"
import * as path from "std/path/mod.ts"

export interface CreateImportsOptions {
  basePath: string
  config: LuxtConfig
}
interface RouteData {
  importSeq: string
  exportSeq: string
}
export const createImports = async (options: CreateImportsOptions) => {
  const absBasePath = path.resolve(options.basePath)
  const routeGlob = path.join(options.basePath, "app", "**", "route.{js,ts,jsx,tsx}")
  const getRoutesPromises: Promise<> = []
  let index = 0
  for await (const entry of fs.expandGlob(routeGlob)) {
    index += 1
    if (!entry.isFile) {
      continue
    }
    getRoutesPromises.push((async () => {
      const relativeImportPath = path.join("..", entry.path.replace(absBasePath, ""))
      
      return {
        importSeq: `import $${index} from '${relativeImportPath.replace("\\", "/")}'`,
      }
    })())
  }
  console.log(await Promise.all(getRoutesPromises))
}
