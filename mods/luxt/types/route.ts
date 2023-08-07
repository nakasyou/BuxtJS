import { jsx } from "../deps.ts"

export type RouterResponse = (
  Response |
  jsx.Node
)
export type Router = (ctx: Context) => RouterResponse | Promise<RouterResponse>
export type Imports = Record<string, Router>
