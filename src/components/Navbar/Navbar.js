import React from "react";
import './Navbar.scss';
import {Link} from 'react-router-dom';

const Navbar = props => {
    console.log(props);
    return (
        <div className='Navbar'>
            <ul className='Navbar__nav'>
                <Link to='/'><li className='Navbar__nav--item'>דף הבית</li></Link>
                <Link to='/about'><li className='Navbar__nav--item'>אודותינו</li></Link>
                <Link to='/contact'><li className='Navbar__nav--item'>צור קשר</li></Link>
            </ul>
        </div>
    )
};

export default Navbar;