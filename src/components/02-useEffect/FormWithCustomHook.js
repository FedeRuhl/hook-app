import React from 'react';
import './effects.css';
import useForm from '../../hooks/useForm';

const FormWithCustomHook = () => {

    const [formValues, handleInputChange, handleSubmit] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    return (
        <form onSubmit={ handleSubmit }>
            <h1> Form With Custom Hook </h1>   
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

            <br />

            <div className="form-group">
                <input 
                    type="password"
                    name="password" 
                    className="form-control" 
                    placeholder="Tu contraseña" 
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <hr />

            <button type="submit" className="btn btn-primary">
                Enviar
            </button>

        </form>
    )
}

export default FormWithCustomHook;