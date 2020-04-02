import React from 'react';
import './Dropdown.scss';
import {Select} from "react-dropdown-select";

const Dropdown = ({className, placeholder, options, setValue, defaultVal}) => {
    const defaultValue = options[defaultVal];
    
    return (
        <>
        {defaultValue && <Select
            labelField='name'
            options={options}
            dropdownGap={-5}
            values={[defaultValue]}
            valueField={'id'}
            keepSelectedInList={false}
            color='#2699FB'
            className={`Dropdown ${className}`}
            direction='rtl'
            placeholder={placeholder}
            onChange={(value) => setValue(value[0].id)} />}
      </>
    );
};

export default Dropdown;