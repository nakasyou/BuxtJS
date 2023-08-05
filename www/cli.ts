import config from "./luxt.config.ts"
import { cli } from "luxt/cli.ts"

await cli({
  args: Deno.args,
  config,
})

