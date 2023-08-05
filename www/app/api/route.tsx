import { defineRoute } from "luxt"

defineRoute(c => {
  return c.json(c.query())
})
