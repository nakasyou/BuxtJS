// Deno server
import { App } from "luxt"

const app = new App()

Deno.serve(app.fetch)
