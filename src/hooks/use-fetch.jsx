import { useEffect, useState } from "react";

function useFetch(url,options=[]) {
    
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(url, { ...options });
            if(!response.ok){throw new Error(response.statusText);
            }
            const results = await response.json();
            if (results) {
                setData(results);
                setLoading(false);
                setError(null);
            }
            


            
        } catch (error) {
            console.log(error);
            setError(error)
            setLoading(false)
            
            
        };

       
    }
    useEffect(() => { fetchData(); }, [url]);
        return {
            data,
            loading,
            error,
        };
}
export default useFetch;
