import config from "./luxt.config.ts"
import { cli } from "luxt"

cli({
  args: Deno.args,
  config,
})

