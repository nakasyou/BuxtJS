import { defineRoute } from "luxt"

export default defineRoute(c => {
  c.header("content-type", "application/typescript")
  
  return c.body(`console.log(${JSON.stringify([...c.req.headers.entries()])})`)
})
