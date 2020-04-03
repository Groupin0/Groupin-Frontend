import React from 'react'
import './Login.scss';
import facebook from '../../assets/facebook.png';
import {useDispatch} from "react-redux";
import {login} from "../../state/actions";


const Login = () => {
    const dispatch = useDispatch();

    const onLogin = () => {
        dispatch(login());
    };

    return (
        <div className='Login'>
            <h1 className='Login__title'>התחברות / הרשמה</h1>
            <div className='Login__wrapper'>
                <a className='Login__btn' onClick={onLogin}>
                    <img src={facebook} alt="facebook icon"/>
                    <p>התחברות באמצעות פייסבוק</p>
                </a>
            </div>
        </div>
    )
};

export default Login;