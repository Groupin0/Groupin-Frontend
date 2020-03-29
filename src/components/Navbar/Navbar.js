import React, { useState } from "react";
import './Navbar.scss';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.js';
import Button from '../Button/Button.js';
import Logo from '../Logo/Logo';
import Modal from '../Modal/Modal.js';
import AddSession from '../Shared/AddSession.js';

const Navbar = props => {

    const [isAddSession, setAddSession] = useState(false);
    const [isConnected, setConnection] = useState(false);

    let accountPanel = '';

    if (isConnected) {
        accountPanel = <div className='Navbar__account'>
                        <Button label='צור מפגש' className='Button__black' onClick={ ()=> {setAddSession(!isAddSession)}}/>
                        <Button label='א' className='Button__white Button__circle Navbar__account--profile' onClick={ ()=> {setConnection(!isConnected)}} />
                    </div>;
    }

    else {
        accountPanel = <div className='Navbar__account'>
                        <Button label='התחבר' className='Button__white' onClick={ ()=> {setConnection(!isConnected)}}/>
                        <Button label='הירשם' className='Button__black' onClick={ ()=> {setConnection(!isConnected)}}/>
                    </div>;
    }

    return (
        <nav className='Navbar'>
            {isAddSession 
                ? <Modal onDismiss = {()=> {setAddSession(!isAddSession)}}>
                    <AddSession onSubmit= {()=> {setAddSession(!isAddSession)}} />
                    </Modal> 
                : ''
            }
            <Link to='/' className='Navbar__home'>
                <Logo />
            </Link>

            <SearchBar className='Navbar__searchbar' />

            {accountPanel}
    
        </nav>
    )
};

export default Navbar;