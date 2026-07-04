import React, { useEffect, useState } from 'react'

function useWindow() {

    const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth })

    const onResize = () => {
        console.log('inside on resize')
        setWindowSize({ height: window.innerHeight, width: window.innerWidth })
    }

    useEffect(() => {
        window.addEventListener('resize', onResize)
    }, [])

    return windowSize
}
export default useWindow