import { useState } from "react"

function useLocalStorage(key, initialValue) {

    if (typeof window === undefined) {
        return [initialValue, () => { }, () => { }]
    }

    if (!key) {
        throw new Error('Key is not present')
    }

    const [value, setValue] = useState(initialValue)

    const set = (value) => {
        console.log('value is ', value)
        setValue(value)
        localStorage.setItem(key, JSON.stringify(value))
    }
    const remove = (params) => {
        localStorage.removeItem(key)
    }

    return [value, set, remove]

}

export default useLocalStorage