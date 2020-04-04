import React from 'react';
import './SearchBar.scss';
import InputDate from "../InputDate/InputDate";
import InputText from "../InputText/InputText";

const SearchBar = props => {
    return (
        <InputText
            className= { `SearchBar ${ props.className }` } 
            type= 'search' 
            placeholder= 'חפש...' 
            onChange= { props.searchChange }
        />
    );
};

export default SearchBar;