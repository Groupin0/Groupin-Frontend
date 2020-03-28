import React from "react";
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.js';
import Button from '../Button/Button.js';
import Logo from '../Logo/Logo';
import './Navbar.scss';

const Navbar = props => {

    const isConnected = props.isConnected || false;
    let accountPanel = '';

    if (isConnected) {
        accountPanel = <div className='Navbar__account'>
                        <Button value={ 'צור מפגש' } className={ 'Button__black' } />
                        <Button value={ 'א' } className={ 'Button__white Button__circle Navbar__account--profile' } />
                    </div>;
    }

    else {
        accountPanel = <div className='Navbar__account'>
                        <Button value={ 'התחבר' } className={ 'Button__white' } />
                        <Button value={ 'הירשם' } className={ 'Button__black' } />
                    </div>;
    }

    return (
        <nav className='Navbar'>
            <Link to='/' className='Navbar__home'>
                <Logo />
            </Link>

            <SearchBar className={'Navbar__searchbar'} />

            {accountPanel}
    
        </nav>
    )
};

export default Navbar;