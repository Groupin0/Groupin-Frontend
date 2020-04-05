import React from 'react';
import '../Input.scss';

const InputText = ({name, className, placeholder, register, type='text', defaultValue=''}) => {

    return (
        <input
            defaultValue={defaultValue}
            autoComplete='off'
            name={ name } 
            type= {type}
            ref={register}
            className= { `Input ${ className }` }
            placeholder={placeholder}
        />
    );
};

export default InputText;