/** @jsx react-jsx */
/** @jsxFrag React.Fragment */
/** @jsx React.createElement */
import React, { useState } from "https://esm.sh/react@18.2.0"

export default () => {
  const [counter, setCounter] = React.useState(0)
  
  return <button onClick={() => {
    setCounter(counter+1)
  }}>
    Count: {counter}
  </button>
}
