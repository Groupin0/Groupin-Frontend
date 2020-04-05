import React from 'react';
import '../Input.scss'
import {renderDate} from "../../../services/dateService";

const InputDate = ({name = 'text', className = '', register, placeholder, defaultValue=''}) => {
    return (
        <input
            name={ name }
            defaultValue={renderDate(defaultValue)}
            type= 'date'
            className= { `Input ${ className }` }
            ref={register}
            placeholder={placeholder}
        />
    );
};

export default InputDate;