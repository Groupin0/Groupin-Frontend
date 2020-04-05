import React from 'react';
import './Dropdown.scss';
import {Select} from "react-dropdown-select";

const Dropdown = ({className, placeholder, options, setValue, defaultVal = null}) => {
    let defOption = '';

    if (defaultVal !== null) {
        defOption = typeof defaultVal === 'object' ? [defaultVal] : [options[defaultVal - 1]]
    } else {
        defOption = []
    }

    return (
        <>
            {options.length > 0 && <Select
                labelField='name'
                options={options}
                dropdownGap={-5}
                values={defOption}
                valueField={'id'}
                keepSelectedInList={false}
                color='#2699FB'
                className={`Dropdown ${className}`}
                searchable={false}
                direction='rtl'
                placeholder={placeholder}
                onChange={(value) => setValue(value[0].id)}/>}
        </>
    );
};

export default Dropdown;