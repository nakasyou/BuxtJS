import { defineRoute } from "luxt"
import { ReactComponent } from "@luxt/react"

import Counter from "./components/Counter.react"

export default defineRoute((ctx, req) => {
  return <>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>App</title>
      </head>
      <body>
        Hello!!
        <ReactComponent component={Counter} />
      </body>
    </html>
  </>
})
