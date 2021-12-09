import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortController.signal }) 
            .then(res => {
                // console.log(res);
                if (!res.ok) {
                   throw Error("Could not fetch the data for the resource");
                }
                return res.json();
            })
            .then(data => {
                //console.log(data);
                setData(data);
                setisPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("Fetch aborted");
                } else {
                    setError(err.message); //to catch server error.
                    setisPending(false);
                }
            })
        }, 1000);

        return () => abortController.abort();
    },[url]); //the url is the dependency which means that whenever the url changes, the function would rerun to get the data for the new endpoint/url.

    return { data, isPending, error }
}

export default useFetch;