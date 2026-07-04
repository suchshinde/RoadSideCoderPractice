import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

export default function useDebounse(inputText = '', delay = 1000) {

    const [debouncedValue, setDebouncedValue] = useState(inputText)

    useEffect(() => {
        const hadler = setTimeout(() => {
            setDebouncedValue(inputText)
        }, delay)

        return () => {
            console.log('Inside return', hadler)
            clearTimeout(hadler)
        }
    }, [inputText])



    return debouncedValue
}
