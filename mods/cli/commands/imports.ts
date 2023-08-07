import { type CliCommand } from "../mod.ts"
import {
  createImports,
} from "../../luxt/src/create-imports.ts"

export default async (init: CliCommand) => {
  const basePath = init.args._[1] || init.projectRoot
  console.log("Creating imports.ts..")
  await createImports({
    config: init.config,
    basePath,
  })
}
