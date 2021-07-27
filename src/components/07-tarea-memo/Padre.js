import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';
import './effects.css';
import { HijoInmutable } from './HijoInmutable';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
        (num) => {
            setValor(v => v + num)
        },
        [setValor],
    )


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }

            <HijoInmutable
                key={ numeros[numeros.length - 1] + 2 }
                numero={ numeros[numeros.length - 1] + 2 }
                funcion={ () => console.log("funcion ejecutada sin renderizar nuevamente") }

            />

            {/* <Hijo /> */}
        </div>
    )
}
