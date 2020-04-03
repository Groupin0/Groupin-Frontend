import React, {useRef} from "react";
import './UserButton.scss';
import {useDispatch} from "react-redux";
import {logout} from "../../state/actions";

const UserButton = ({userName, userImage}) => {
    const dispatch = useDispatch();
    const userDropDown = useRef();

    const onToggle = () => {
        userDropDown.current.classList.toggle('UserButton__dropdown--open');
    };

    const onClose = () => {
        userDropDown.current.classList.remove('UserButton__dropdown--open');
    };

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <div className='UserButton'>
            <div className={`UserButton__user ${!userImage ? 'UserButton__user--no-pic' : ''}`} onClick={onToggle}>
                {userImage ? <img src={userImage} alt="image profile" /> : <span className='UserButton__user--first-letter'>{userName[0]}</span>}
            </div>
            <ul ref={userDropDown} className='UserButton__dropdown' onClick={onClose}>
                <li className='UserButton__dropdown--overlay' />
                <li>המפגשים שלי</li>
                <li onClick={onLogout}>התנתק</li>
            </ul>
        </div>
    )
};

export default UserButton;