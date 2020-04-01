import React from 'react';
import './Dropdown.scss';

const Dropdown = ({
        name = 'select',
        options = [],
        register,
        className = '',
        ...props
}) => {
    
    return (
        <select 
            name={ name } 
            ref={ register }
            className={ `Dropdown ${ className }` }
            { ...props }
            >
            { options.map(value => (
                <option 
                    value={ value.id } 
                    key={ value.name }
                >
                    { value.name }
                </option>
            )) }
        </select>
    );
};

export default Dropdown;