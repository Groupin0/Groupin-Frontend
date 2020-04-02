import React from 'react';
import './SearchBar.scss';
import InputDate from "../InputDate/InputDate";

const SearchBar = props => {
    return (
        <InputDate
            className= { `SearchBar ${ props.className }` } 
            type= 'search' 
            placeholder= 'חפש...' 
            onChange= { props.searchChange }
        />
    );
};

export default SearchBar;