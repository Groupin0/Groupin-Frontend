import React from "react";
import '../Input.scss'

const InputTextArea = ({className, defaultVal='', placeholder, onChange}) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (<>
        <textarea
        maxLength="2000"
        className={`Input Input__textarea ${className}`}
        defaultValue={defaultVal}
        placeholder={placeholder}
        onChange={handleChange}
        >
    </textarea>
        <small className='Input__textarea--count'>{`2000/${defaultVal ? defaultVal.length : 0}`}</small>
        </>)
}

export default InputTextArea;