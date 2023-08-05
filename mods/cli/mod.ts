import {
  flags
} from "./deps.ts"
import {
  path
} from "../deps.ts"
import {
  createImports,
} from "../luxt/src/create-imports.ts"
interface Options {
  args: string[]
  config: object
}
export const cli = (options: Options) => {
  const args = flags.parse(options.args)

  switch (args._[0]) {
    case "imports": {
      const basePath = args._[1] || "."
      console.log("Creating imports.ts..")
      await createImports({
        config: options.config,
        basePath,
      })
      break
    }
    default:
      console.log("hello!")
  }
}
