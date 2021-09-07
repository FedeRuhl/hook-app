import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current)
                {
                    setState({
                        data,
                        loading: false,
                        error: null
                    });
                }
            })
            .catch((e) => setState({
                data: null,
                loading: false,
                error: 'Data could not be fetched'
            }));
    }, [url]);

    return state;

};

export default useFetch;