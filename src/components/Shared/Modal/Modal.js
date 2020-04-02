import React from 'react';
import './Modal.scss';
import ReactDOM from 'react-dom';
import {useDispatch} from "react-redux";
import {closeModal} from "../../../state/actions";

const Modal = ({children, modal}) => {
    const dispatch = useDispatch();

    const onCloseModal = () => {
        dispatch(closeModal(modal))
    };

    return ReactDOM.createPortal(
        <div className='Modal'>
            <div className='Modal__overlay' onClick={onCloseModal} />
            <div onClick={ (e)=> e.stopPropagation() } className='Modal__content'>
                { children }
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;