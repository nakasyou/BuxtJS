import { defineRoute } from "luxt"

export default defineRoute((ctx, req) => {
  return new Response("Hello!")
})
