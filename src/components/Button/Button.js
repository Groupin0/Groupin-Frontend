import React from "react";
import './Button.scss';

const Button = ({type = 'button', label = '', ...props}) => {

    return (
        <button 
            type={ type } 
            className= {`Button ${props.className}`}
            onClick={ props.onClick }
        >
            { label }
        </button>
    )
};

export default Button;