import { defineCliCommand } from "../mod.ts"

export default defineCliCommand(async init => {
  const basePath = init.args._[1] || init.projectRoot
  console.log("Creating imports.ts..")
  await createImports({
    config: init.config,
    basePath,
  })
})
