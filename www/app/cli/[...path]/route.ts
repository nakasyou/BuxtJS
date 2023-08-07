import { defineRoute } from "luxt"
import * as path from "std/path/mod.ts"

export default defineRoute(async (c) => {
  const pathParam = c.req.param("path")
  const readPath = path.join("./mods",pathParam)
  c.header("content-type", "application/typescript")
  return c.body(await Deno.readTextFile(readPath))
})
