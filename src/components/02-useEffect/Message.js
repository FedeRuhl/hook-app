import React, { useEffect, useState } from 'react'

const Message = () => {

    const [[x, y], setCoords] = useState([0, 0]);

    useEffect(() => {

        const mouseMove = ({x, y}) => {
            setCoords([x, y]);
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <>
            <h1>Coords</h1>   
            <p>({ x }, { y })</p>
        </>
    )
}

export default Message
