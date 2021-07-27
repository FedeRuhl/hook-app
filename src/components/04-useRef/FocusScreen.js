import React, { useRef } from 'react';
import './effects.css';

const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus screen</h1>
            <hr />

            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-2"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
};

export default FocusScreen;
