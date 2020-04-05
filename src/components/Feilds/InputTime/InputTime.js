import React from 'react';
import '../Input.scss';
import {renderTime} from "../../../services/dateService";

const InputTime = ({name, className, placeholder, register, defaultValue=''}) => {
    return (
        <input
            name={ name }
            defaultValue={renderTime(defaultValue)}
            type= 'text'
            ref={register}
            className= { `Input ${ className }` }
            placeholder={placeholder}
            onBlur={(e) => {e.target.type='text'}}
            onFocus={(e) => {e.target.type='time'}}
        />
    );
};

export default InputTime;