import { type CliCommand } from "../mod.ts"
import {
  build,
} from "../../build/mod.ts"

export default async (init: CliCommand) => {
  const basePath = init.args._[1] || init.projectRoot
  await build({
    config: init.config,
    basePath,
  })
}
