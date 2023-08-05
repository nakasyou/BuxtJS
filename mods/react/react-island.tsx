// luxt/react.ts
import { h, Fragment } from "luxt/jsx.ts"
import { renderToString } from 'https://esm.sh/react-dom@18.2.0/server'
import React from 'https://esm.sh/react-dom'

export interface ReactIslandProps {
  Island: any
}
export const ReactIsland = (props: Props) => {
  console.log(<props.Island />)
  return (<>
    <div>Hello isLand!</div>
    <div id={`app-${Math.random()}`}>
      { renderToString(React.createElement('div',{},'hello')) }
    </div>
  </>)
}
