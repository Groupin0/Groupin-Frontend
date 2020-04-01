import React from 'react';
import './Input.scss';

const Input = ({
        name = 'text',
        type = 'text',
        className = '',
        register,
        ...props
    }) => {
    
    return (
        <input 
            name={ name } 
            type= { type }
            className= { `Input ${ className }` }
            ref = { register }
            { ...props }
        />
    );
};

export default Input;