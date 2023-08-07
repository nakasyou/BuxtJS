import { defineRoute } from "luxt"
import { h, Fragment } from "luxt/jsx.ts"
import { ReactIsland } from "luxt/react.ts"
import App from "./app.tsx"
import * as path from "std/fs/mod.ts"

export default defineRoute((c) => {
  return <html>
    <head>
      <meta charset="utf-8" />
    </head>
    <body>
      <ReactIsland Island={App} path={path.join(path.fromFileUrl(import.meta.url),"./app.tsx")} />
    </body>
  </html>
})
