import React from 'react';
import './SearchBar.scss';
import Input from '../Form/Input.js';

const SearchBar = props => {
    return (
        <Input 
            className= { `SearchBar ${ props.className }` } 
            type= 'search' 
            placeholder= 'חפש...' 
            onChange= { props.searchChange }
        />
    );
}

export default SearchBar;