// luxt/react.ts
import { h, Fragment } from "luxt/jsx.ts"
import { renderToString } from 'https://esm.sh/react-dom@18.2.0/server'

export interface ReactIslandProps {
  Island: any
}
export const ReactIsland = (props: Props) => {
  return (<>
    <div>Hello isLand!</div>
    <div id={`app-${Math.random()}`}>
      { renderToString(<props.Island />) }
    </div>
  </>)
}
