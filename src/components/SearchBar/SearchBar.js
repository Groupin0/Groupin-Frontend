import React from 'react';
import './SearchBar.scss';
import InputField from '../InputField/InputField.js';

const SearchBar = props => {
    return (
        <InputField 
            className= { `SearchBar ${props.className}` } 
            type= 'search' 
            placeholder= 'חפש...' 
            onChange= { props.searchChange }
        />
    );
}

export default SearchBar;