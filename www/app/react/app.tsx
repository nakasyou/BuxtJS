/** @jsx react-jsx */
/** @jsxFrag React.Fragment */
/** @jsx React.createElement */
import React, { useState } from "https://esm.sh/react@18.2.0"

export default () => {
  const [counter, setCounter] = useState(0)
  const click = () => {
    setCounter(counter+1)
  }
  return <>
    <button onClick={click}>
      Count is {counter}
    </button>
  </>
}
