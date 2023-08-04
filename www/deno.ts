// Deno server
import { App } from "luxt"
import imports from "./.luxt/imports.ts"

const app = new App({
  imports,
})

Deno.serve(app.fetch)
