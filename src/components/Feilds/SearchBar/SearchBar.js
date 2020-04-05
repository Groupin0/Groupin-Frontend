import React, {useRef} from 'react';
import './SearchBar.scss';
import '../Input.scss';

const SearchBar = ({className, onSerach}) => {
    const searchBarRef = useRef('');

    let timeout = null;

    const handleKeyup = (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (!searchBarRef.current.value.trim()) return;

            onSerach(searchBarRef.current.value);
        }, 1500);
    };
    return (
        <input ref={searchBarRef} type='search' placeholder='חפש מפגשים ...' onKeyUp={handleKeyup} className={`SearchBar Input ${className}`} />
    );
};

export default SearchBar;