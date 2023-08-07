// Deno server
import { App } from "luxt"
import config from "./luxt.config.ts"

const app = new App({
  config,
})

Deno.serve(app.fetch.bind(app))
