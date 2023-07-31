/** @jsxFrag React.Fragment */
/** @jsx React.createElement */

import React, { useState } from "react"

export default () => {
  const [count, setCount] = useState(0)
  
  const click = () => {
    setCount(count + 1)
  }
  return <>
    <button onClick={click}>
      Count: {count}
    </button>
  </>
}
