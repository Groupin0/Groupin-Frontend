import React from "react";
import './Button.scss';

const Button = props => {

    return (
        <button 
            type={ props.type || 'button' } 
            className={ 'Button ' + (props.className || '') }  
            onClick={ props.onClick }
        >
            { props.value || '' }
        </button>
    )
};

export default Button;