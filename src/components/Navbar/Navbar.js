import React from "react";
import './Navbar.scss';
import history from '../../history';
import {Link} from 'react-router-dom';
import SearchBar from '../Feilds/SearchBar/SearchBar.js';
import Button from '../Button/Button.js';
import Logo from '../Logo/Logo';
import Modal from '../Shared/Modal/Modal.js';
import AddSession from '../Shared/AddSession/AddSession.js';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {openModal} from "../../state/actions";

const Navbar = () => {
    const {user, isModalOpen, addSessionModal} = useSelector(state => ({
        user: state.user,
        isModalOpen: state.modals.isModalOpen,
        addSessionModal: state.modals.addSessionModal,
    }), shallowEqual);
    const dispatch = useDispatch();

    const renderNavbar = () => {
        let accountPanel = '';

        if (user && user.id !== null) {
            accountPanel = <>
                <Button label='צור מפגש' className='Button__black' onClick={() => dispatch(openModal('addSessionModal'))} />
                <Button label='א' className='Button__white Button__circle Navbar__account--profile' />
            </>;
        }

        else {
            accountPanel = <Button label='התחבר' className='Button__black' onClick={() => history.push('/login')} />
        }

        return accountPanel
    };

    return (
        <nav className='Navbar'>
            <Link to='/' className='Navbar__home'>
                <Logo />
            </Link>

            <SearchBar className='Navbar__searchbar' />
            <div className='Navbar__account'>
                {renderNavbar()}
            </div>
            {isModalOpen && <Modal>
                {addSessionModal && <AddSession modal='addSessionModal' />}
            </Modal>}
        </nav>
    )
};

export default Navbar;