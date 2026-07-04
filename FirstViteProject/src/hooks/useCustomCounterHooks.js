import React, { useState } from 'react'

export default function useCustomCounterHooks(initialValue = 0, step = 1) {

    const [counter, setcounter] = useState(initialValue)
    const increment = (value) => setcounter(counter + value)
    const decrement = (value) => setcounter(counter - value)
    const reset = () => setcounter(initialValue)
    return [counter, increment, decrement, reset]
}
