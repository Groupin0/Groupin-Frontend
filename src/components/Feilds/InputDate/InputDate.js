import React from 'react';
import '../Input.scss';

const InputDate = ({name = 'text', className = '', register, placeholder}) => {
    return (
        <input
            name={ name } 
            type= 'text'
            className= { `Input ${ className }` }
            ref={register}
            placeholder={placeholder}
            onBlur={(e) => {e.target.type='text'}}
            onFocus={(e) => {e.target.type='date'}}
        />
    );
};

export default InputDate;