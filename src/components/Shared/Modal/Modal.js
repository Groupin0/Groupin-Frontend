import React from 'react';
import './Modal.scss';
import ReactDOM from 'react-dom';
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../../state/actions";
import Spinner from "../Spinner/Spinner";

const Modal = ({children, modal}) => {
    const isLoading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    const onCloseModal = () => {
        dispatch(closeModal(modal))
    };

    return ReactDOM.createPortal(
        <div className='Modal'>
            <div className='Modal__overlay' onClick={onCloseModal} />
            <div onClick={ (e)=> e.stopPropagation() } className='Modal__content'>
                {isLoading && <div className='Modal__spinner'><Spinner /></div>}
                { children }
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;