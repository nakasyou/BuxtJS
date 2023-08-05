import { defineRoute } from "luxt"
import path from "std/fs/mod.ts"

export default defineRoute(async (c) => {
  const pathParam = c.req.param("path")
  const readPath = path.join("./",pathParam)
  c.header("content-type", "application/typescript")
  return c.body(await Deno.readTextFile(readPath))
})
