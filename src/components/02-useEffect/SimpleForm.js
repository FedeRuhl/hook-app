import React, { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

    const [formState, setState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log('effect');    
    }, []); //first time
    
    useEffect(() => {
        console.log('formState changed');    
    }, [formState]); //every time formState change

    const handleInputChange = ({ target }) => {
        setState({
            ...formState,
            [target.name]: target.value
        });
    };

    return (
        <>
            <h1> Use Effect </h1>   
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name" 
                    className="form-control" 
                    placeholder="Tu nombre" 
                    autoComplete="off" 
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <br />

            <div className="form-group">
                <input 
                    type="email"
                    name="email" 
                    className="form-control" 
                    placeholder="Tu email" 
                    autoComplete="off" 
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name ? <Message /> : '' }

        </>
    )
}

export default SimpleForm
