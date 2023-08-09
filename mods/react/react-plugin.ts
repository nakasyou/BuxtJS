import type { luxtPlugin } from "../luxt/mod.ts"
import { unplugin } from "../deps.ts"

export const reactPlugin: luxtPlugin = () => {
  return {
    name: "Luxt React Plugin",
    unplugin: unplugin.createUnplugin((options) => {
      return {
        name: "luxt-react-plugin",
        transformInclude(id) {
          return id.endsWith('.react.tsx')
        },
      }
    })
  }
}
