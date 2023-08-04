import * as jsx from "../deps.ts"

export interface Context {
  
}
export type Router = (ctx: Context) => (
  Response |
  Node
)

export const defineRoute = (router) => router

export interface AppInit {
  imports: Record<string, any>
}
export class App {
  init: AppInit
  constructor (init: AppInit) {
    this.init = AppInit
  }
  fetch (request: Request): Response {
    return new Response(jsx.renderToString(this.init.imports["./route.ts"]), {
      headers: {
        "content-type": "text/html"
      }
    })
  }
}
