import config from "./luxt.config.ts"
import { cli } from "luxt/cli/mod.ts"

cli({
  args: Deno.args,
  config,
})

