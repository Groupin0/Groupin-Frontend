import React, {useCallback} from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import './SessionCube.scss';
import useResource from "../../hooks/useResources";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {openModal} from "../../state/actions";
import Modal from "../Shared/Modal/Modal";
import AddSession from "../Shared/AddSession/AddSession";

const SessionCube = ({data, className}) => {
    // const {isModalOpen, infoSessionModal} = useSelector(state  => ({
    //     isModalOpen: state.modals.isModalOpen,
    //     infoSessionModal: state.modals.infoSessionModal
    // }), shallowEqual);
    const dispatch = useDispatch();
    const {category, title, description, start_date, img_source} = data;

    const renderLimitWords = useCallback((text, limit) => {

        if (text.length > limit) {
            return `${text.substring(0, limit)} ...`;
        }
        return text;
    }, []);


    const sessionPic = useResource(category.name);

    return (
        <div className={`SessionCube ${className}`}>
            <div className='SessionCube__img'
                 style={{backgroundImage: `url(${img_source !== null ? img_source : sessionPic})`}} />
            <div className='SessionCube__content'>
                <div className='SessionCube__text'>
                    <h1 className='SessionCube__text--title'>{renderLimitWords(title, 25)}</h1>
                    <p className='SessionCube__text--description'>{renderLimitWords(description, 100)}</p>
                </div>
                <div className='SessionCube__date'>
                    <span>
                        <Moment tz="Asia/Jerusalem" format='HH:mm'>{start_date}</Moment>
                    </span>
                    <span>
                        <Moment format='DD/MM/YYYY'>{start_date}</Moment>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default SessionCube;