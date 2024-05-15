import { useEffect, useState } from 'react';

const useFetchData = (fetchingURL) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(fetchingURL)
                if (!resp.ok) {
                    setIsLoading(false)
                    setIsError(true)
                }
                const response = await resp.json()
                setData(response)
            } catch (error) {
                setIsError(true);
                // console.log(error);
            }
            setIsLoading(false);
        }

        fetchData()
    }, [])
    return { isError, isLoading, data }
}

export default useFetchData