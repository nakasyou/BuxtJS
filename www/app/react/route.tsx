import { defineRoute } from "luxt"
import { h, Fragment } from "luxt/jsx.ts"
import { ReactIsland } from "luxt/react.ts"
import App from "./app.tsx"

export default defineRoute((c) => {
  return <html>
    <head>
      <meta charset="utf-8" />
    </head>
    <body>
      <ReactIsland island={App} />
    </body>
  </html>
})
