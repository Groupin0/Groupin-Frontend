import React from "react";
import '../Input.scss'

const InputNumber = ({name, className, register, placeholder, defaultValue=''}) => {
    return <input
        autoComplete='off'
        name={ name }
        type= 'number'
        defaultValue={defaultValue}
        className= { `Input ${ className }` }
        ref={register}
        placeholder={placeholder}/>
};

export default InputNumber