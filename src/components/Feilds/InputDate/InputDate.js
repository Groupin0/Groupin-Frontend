import React from 'react';
import '../Input.scss'
import {renderDate} from "../../../services/dateService";

const InputDate = ({name = 'text', className = '', register, placeholder, defaultValue=''}) => {
    return (
        <input
            name={ name }
            defaultValue={renderDate(defaultValue)}
            type= 'text'
            className= { `Input ${ className }` }
            ref={register}
            placeholder={placeholder}
            onBlur={(e) => {e.target.type='text'}}
            onFocus={(e) => {e.target.type='date'}}
        />
    );
};

export default InputDate;