import React from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';
import './effects.css';

const MultipleCustomHooks = () => {

    const { state: counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const author = (!!data && data.length > 0) ? data[0].author : '';
    const quote = (!!data && data.length > 0) ? data[0].quote : '';

    return (
        <>
        <h1>
            Breaking Bad Quotes
        </h1>

        <hr />

        { 
        
        (loading)
            ? 
                (
                    <div className="alert alert-info text-center">Cargando...</div>
                )
            :
                (
                    <blockquote className="blockquote text-end">
                        <p className="mb-2">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
        }

        <button className="btn btn-primary" onClick={ () => increment() }>
            Siguiente cita
        </button>

        </>
    )
}

export default MultipleCustomHooks
