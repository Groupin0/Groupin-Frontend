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
import {getSessionBySearch, openModal} from "../../state/actions";
import UserButton from "../UserButton/UserButton";

const Navbar = () => {
    const {user, isModalOpen, addSessionModal} = useSelector(state => ({
        user: state.user,
        isModalOpen: state.modals.isModalOpen,
        addSessionModal: state.modals.addSessionModal,
    }), shallowEqual);
    const dispatch = useDispatch();

    const onSearchQuery = async query => {
        history.push(`/search?q=${query}`);
      await dispatch(getSessionBySearch(query))
    };

    const renderNavbar = () => {
        if (user && user.id !== null) {
            return <>
                <Button label='צור מפגש' className='Button__black' onClick={() => dispatch(openModal('addSessionModal'))} />
                <UserButton userId={user.id} userName={user.display_name} userImage={user.img_source} />
            </>;
        }
        return <Button label='התחבר' className='Button__black' onClick={() => history.push('/login')} />

    };

    return (
        <nav className='Navbar'>
            <div className='Navbar__home' onClick={() => history.push('/')}>
                <Logo />
            </div>

            <SearchBar className='Navbar__searchbar' onSerach={onSearchQuery} />
            <div className='Navbar__account'>
                {renderNavbar()}
            </div>
            {addSessionModal && <Modal modal='addSessionModal'><AddSession /></Modal>}
        </nav>
    )
};

export default Navbar;