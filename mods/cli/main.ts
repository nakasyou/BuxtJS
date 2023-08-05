import {
  flags
} from "./deps.ts"
import {
  path
} from "../deps.ts"
import {
  createImports,
} from "../luxt/src/create-imports.ts"

const args = flags.parse(Deno.args)

switch (args._[0]) {
  case "imports": {
    console.log("Creating imports.ts..")
    const basePath = args._[1] || "."
    const configPath = path.join(Deno.cwd(), basePath, "luxt.config.ts")
    const config = (await import(configPath)).default
    await createImports({
      config,
      basePath,
    })
    break
  }
  default:
    console.log("hello!")
}
