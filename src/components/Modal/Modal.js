import React from 'react';
import './Modal.scss';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={ props.onDismiss } className='Modal'>
            <div onClick={ (e)=> e.stopPropagation() } className='Modal__content'>
                { props.children }
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;