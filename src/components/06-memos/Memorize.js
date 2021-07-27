import React from 'react';
import useCounter from '../../hooks/useCounter';
import { Small } from './Small';
import './effects.css';

const Memorize = () => {

    const { state: counter, increment } = useCounter(10);

    return (
        <div>
            <h1>Memorize</h1>
            <hr />

            <h2>Counter: <Small value={ counter } /> </h2>

            <button 
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +
            </button>
        </div>
    );
};

export default Memorize;