import React, { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import './effects.css';

const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    return (
        <div>
            <h1>Real example ref</h1>
            <hr />

            { (show) ? <MultipleCustomHooks /> : null }

            <button 
                className="btn btn-success"
                onClick={ handleClick }
            >
                Mostrar/ocultar
            </button>
        </div>
    )
};

export default RealExampleRef;