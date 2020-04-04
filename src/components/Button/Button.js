import React from "react";
import './Button.scss';

const Button = ({type = 'button', label = '', className='', onClick }) => {

    return (
        <button 
            type={ type } 
            className= {`Button ${className}`}
            onClick={ onClick }>
            { label }
        </button>
    )
};

export default Button;