import { defineRoute } from "luxt"

export default defineRoute(c => {
  return c.json(c.req.query())
})
