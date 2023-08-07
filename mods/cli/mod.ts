import {
  flags
} from "./deps.ts"
import {
  path
} from "../deps.ts"
import {
  createImports,
} from "../luxt/src/create-imports.ts"

import createImportsCommand from "./commands/imports.ts"

export interface CliCommandInit {
  args: flag.Args
  config: object
  projectRoot: string
}
export type CliCommand = (init: CliCommandInit) => void | Promise<void>
export const defineCliCommand = (command: CliCommand): CliCommand => command

interface Options {
  args: string[]
  config: object
  projectRoot: string
}
export const cli = async (options: Options) => {
  const args = flags.parse(options.args)

  const commandInit: CliCommandInit = {
    args,
    config: options.config,
    projectRoot: options.projectRoot,
  }
  switch (args._[0]) {
    case "imports": {
      await createImportsCommand(commandInit)
    }
    default:
      console.log("hello!")
  }
}

