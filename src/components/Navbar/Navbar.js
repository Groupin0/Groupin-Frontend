import React from "react";
import './Navbar.scss';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.js';
import Button from '../Button/Button.js';
import Logo from '../Logo/Logo';

const Navbar = props => {

    const isConnected = props.isConnected || false;
    let accountPanel = '';

    if (isConnected) {
        accountPanel = <div className='Navbar__account'>
                        <Button label='צור מפגש' className='Button__black' />
                        <Button label='א' className='Button__white Button__circle Navbar__account--profile' />
                    </div>;
    }

    else {
        accountPanel = <div className='Navbar__account'>
                        <Button label='התחבר' className='Button__white' />
                        <Button label='הירשם' className='Button__black' />
                    </div>;
    }

    return (
        <nav className='Navbar'>
            <Link to='/' className='Navbar__home'>
                <Logo />
            </Link>

            <SearchBar className='Navbar__searchbar' />

            {accountPanel}
    
        </nav>
    )
};

export default Navbar;