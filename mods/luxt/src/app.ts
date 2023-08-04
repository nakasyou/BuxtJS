import { Hono } from "https://deno.land/x/hono@v3.3.4/mod.ts"
import { jsx } from "../deps.ts"

export interface Context {
  
}
export type RouterResponse = (
  Response |
  jsx.Node
)
export type Router = (ctx: Context) => RouterResponse | Promise<RouterResponse>

export const defineRoute = (router: Router) => router

export interface AppInit {
  imports: Record<string, Router>
}
function modulePathToPath (modulePath: string) {
  if (modulePath.slice(0,2) === "./") {
    modulePath = modulePath.replace("./", "")
  }
  modulePath = modulePath.replace(/route\.(ts|tsx)$/, "")
  modulePath = "/" + modulePath
  return modulePath
}
export class App {
  init: AppInit
  honoApp: Hono
  constructor (init: AppInit) {
    this.init = init

    const app = new Hono()
    for (const [path, route] of Object.entries(this.init.imports)) {
      app.all(modulePathToPath(path), async ctx => {
        const routeResult = await route(ctx)
        if (routeResult instanceof Response) {
          return routeResult
        }
        return new Response(await jsx.renderToString(routeResult), {
          headers: {
            "content-type": "text/html"
          }
        })
      })
    }
    this.honoApp = app
  }
  async fetch (request: Request): Promise<Response> {
    return await this.honoApp.fetch(request)
  }
}
