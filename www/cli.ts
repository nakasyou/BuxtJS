import config from "./luxt.config.ts"
import { cli } from "luxt/cli.ts"
import * as path from "std/path/mod.ts"

await cli({
  args: Deno.args,
  config,
  projectRoot: path.dirname(path.fromFileUrl(import.meta.url))
})

