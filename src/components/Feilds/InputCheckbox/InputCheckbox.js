import React, {useRef, useState} from "react";
import '../Input.scss';

const InputCheckbox = ({name, className, register, defaultValue}) => {
    const [isActive, setActive] = useState(defaultValue);

    return (
        <label className='Input__checkbox' htmlFor={name}>
        <input
            id={name}
            name={name}
            defaultChecked={defaultValue}
            className={`Input ${className}`}
            type='checkbox'
            ref={register}
            onChange={e => setActive(e.target.checked)}/>
        <span className='Input__checkbox--input' />
        <span>{isActive ? 'פעיל' : 'לא פעיל'}</span>
        </label>
    )
};

export default InputCheckbox