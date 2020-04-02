import React from 'react';
import '../Input.scss';

const InputText = ({name, className, placeholder, register}) => {
    return (
        <input
            autoComplete='off'
            name={ name } 
            type= 'text'
            ref={register}
            className= { `Input ${ className }` }
            placeholder={placeholder}
        />
    );
};

export default InputText;