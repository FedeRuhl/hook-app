import React from 'react';

export const HijoInmutable = ({ numero, funcion }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary me-2"
            onClick={ funcion }
        >
            { numero }
        </button>
    );
};