import React from 'react';
import '../Input.scss';

const InputTime = ({name, className, placeholder, register}) => {
    return (
        <input
            name={ name } 
            type= 'text'
            ref={register}
            className= { `Input ${ className }` }
            placeholder={placeholder}
            onBlur={(e) => {e.target.type='text'}}
            onFocus={(e) => {e.target.type='time'}}
        />
    );
};

export default InputTime;