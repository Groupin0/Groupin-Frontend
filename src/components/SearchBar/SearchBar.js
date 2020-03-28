import React from 'react';
import './SearchBar.scss';

const SearchBar = props => {
    return (
        <input 
            className= { 'SearchBar ' + (props.className || '') } 
            type= 'search' 
            placeholder= 'חפש...' 
            onChange= { props.searchChange }
        />
    );
}

export default SearchBar;