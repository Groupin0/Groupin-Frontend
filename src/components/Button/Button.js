import React from "react";
import './Button.scss';

const Button = props => {

    return (
        <button type={ props.type || 'button' } className={ 'Button ' + (props.className || '') }  >
            { props.value || '' }
        </button>
    )
};

export default Button;