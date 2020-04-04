import React from "react";
import './Button.scss';

const Button = ({type = 'button', label = '', className='', onClick , isDisabled = false}) => {

    return (
        <button 
            type={ type } 
            className= {`Button ${ className }`}
            onClick={ onClick }
            disabled={ isDisabled }>
            { label }
        </button>
    )
};

export default Button;