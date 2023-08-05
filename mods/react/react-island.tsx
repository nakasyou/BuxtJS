// luxt/react.ts
import { h, Fragment } from "luxt/jsx.ts"
import { renderToString } from 'https://jspm.dev/react-dom@18.2.0/server'
import React from 'https://jspm.dev/react'

export interface ReactIslandProps {
  Island: any
}
export const ReactIsland = (props: Props) => {
  return (<>
    <div>Hello isLand!</div>
    <div id={`app-${Math.random()}`} dangerouslySetInnerHTML={{
      __html: renderToString(<props.Island />)
    }}></div>
  </>)
}
