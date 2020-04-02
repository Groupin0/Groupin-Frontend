import React, {useCallback, useState} from "react";
import './Navbar.scss';
import {Link} from 'react-router-dom';
import SearchBar from '../Feilds/SearchBar/SearchBar.js';
import Button from '../Button/Button.js';
import Logo from '../Logo/Logo';
import Modal from '../Shared/Modal/Modal.js';
import AddSession from '../Shared/AddSession/AddSession.js';
import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../../state/actions";

const Navbar = () => {
    const {isModalOpen, addSessionModal, loginModal} = useSelector(state => ({
        isModalOpen: state.modals.isModalOpen,
        addSessionModal: state.modals.addSessionModal,
        loginModal: state.modals.loginModal
    }));
    const dispatch = useDispatch();
    const [isConnected, setConnection] = useState(true);
    let accountPanel = '';



    if (isConnected) {
        accountPanel = <div className='Navbar__account'>
                        <Button label='צור מפגש' className='Button__black' onClick={() => dispatch(openModal('addSessionModal'))} />
                        <Button label='א' className='Button__white Button__circle Navbar__account--profile' onClick={ ()=> {setConnection(!isConnected)}} />
                    </div>;
    }

    else {
        accountPanel = <div className='Navbar__account'>
                        <Button label='התחבר' className='Button__black' onClick={ ()=> {setConnection(!isConnected)}}/>
                    </div>;
    }

    return (
        <nav className='Navbar'>
            <Link to='/' className='Navbar__home'>
                <Logo />
            </Link>

            <SearchBar className='Navbar__searchbar' />

            {accountPanel}

            {isModalOpen && <Modal>
                {addSessionModal && <AddSession modal='addSessionModal' />}
            </Modal>}
        </nav>
    )
};

export default Navbar;