import React, { useLayoutEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';
import './effects.css';

const Layout = () => {

    const { state: counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const quote = (!!data && data.length > 0) ? data[0].quote : '';

    const paragraph = useRef();

    useLayoutEffect(() => {
        console.log(paragraph.current.getBoundingClientRect());
        return () => {
            console.log('limpio');
        };
    }, [quote])

    return (
        <>
        <h1>
            Layout Effect
        </h1>

        <hr />

        <blockquote className="blockquote">
            <p 
                className="mb-2"
                ref={ paragraph }
            >
                { quote }
            </p>
        </blockquote>

        <button className="btn btn-primary" onClick={ () => increment() }>
            Siguiente cita
        </button>

        </>
    )
}

export default Layout;