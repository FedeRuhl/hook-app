import React, { useMemo } from 'react';
import hardProcess from '../../helpers/hardProcess';
import useCounter from '../../hooks/useCounter';
import './effects.css';

const MemoHook = () => {

    const { state: counter, increment } = useCounter(3200);

    const memoHardProcess = useMemo(() => hardProcess(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <hr />

            {/* <p> { hardProcess(counter) } </p> */}
            <p> { memoHardProcess } </p>

            <h2>Counter: <small> { counter } </small></h2>

            <button 
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +
            </button>
        </div>
    );
};

export default MemoHook;