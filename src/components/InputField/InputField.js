import React from 'react';
import './InputField.scss';

const InputField = ({
        name = 'textField',
        type = 'text',
        value = 'text',
        placeholder = '',
        label = '',
        ...props
    }) => {
    
    return (
        <>
        {(label === '') ? ''
            : <label htmlFor={ name } className=''> { label }</label>
        }
        <input 
            name={ name } 
            type= { type } 
            value= { props.value }
            placeholder= { placeholder }
            onChange= { props.onChange }
            className= { `InputField ${ props.className }`}
        />
        </>
    );
};

export default InputField;