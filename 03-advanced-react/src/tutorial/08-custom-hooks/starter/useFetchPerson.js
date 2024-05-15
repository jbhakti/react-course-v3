import { useEffect, useState } from 'react';

const useFetchPerson = (fetchingURL) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const resp = await fetch(fetchingURL)
                if (!resp.ok) {
                    setIsLoading(false)
                    setIsError(true)
                }
                const data = await resp.json()
                setUser(data)
            } catch (error) {
                setIsError(true);
                // console.log(error);
            }
            setIsLoading(false);
        }

        fetchUser()
    }, [])
    return [isError, isLoading, user]
}

export default useFetchPerson