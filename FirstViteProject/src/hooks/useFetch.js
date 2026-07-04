import { useEffect, useState } from "react"

function useFetch(url) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url);
                console.log('response is =', response)

                const data = await response.json()
                console.log('datas is =', data)
                if (!response.ok) {
                    setError(error)
                } else {
                    setData(data)
                }
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])


    return [data, error, isLoading]

}

export default useFetch