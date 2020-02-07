import React from 'react'

const Counter = ({ counter, decrement, increment }) => (
  <>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </>
)

export default Counter
