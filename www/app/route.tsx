import { defineRoute } from "luxt"
import { h, Fragment } from "luxt/jsx.ts"

export default defineRoute((c) => {
  if (c.req.header('User-Agent').includes("Deno")) {
    // isDeno
    return c.redirect('/cli/cli/main.ts')
  }
  return <html>
    <head>
      <meta charset="utf-8" />
    </head>
    <body>
      <h1>Luxt</h1>
      <p>Luxtは、次世代のウェブフレームワークです。</p>
    </body>
  </html>
})
