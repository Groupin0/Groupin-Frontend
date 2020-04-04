import React, {useCallback} from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import './SessionCube.scss';
import useResource from "../../hooks/useResources";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {openModal} from "../../state/actions";
import Modal from "../Shared/Modal/Modal";
import AddSession from "../Shared/AddSession/AddSession";

const SessionCube = ({data, className, onClickSession}) => {
    const {category, title, description, start_date, img_source} = data;

    const handleClickSession = () => {
        onClickSession(data)
    };

    const renderLimitWords = useCallback((text, limit) => {
        if (text && text.length > limit) {
            return `${text.substring(0, limit)} ...`;
        }
        return text;
    }, []);


    const categoryImg = useResource(category.name);

    return (
        <div className={`SessionCube ${className}`}>
            <div className='SessionCube__img'
                 style={{backgroundImage: `url(${img_source !== null ? img_source : categoryImg})`}} />
            <div className='SessionCube__content'>
                <div className='SessionCube__text'>
                    <h1 className='SessionCube__text--title' onClick={handleClickSession} >{renderLimitWords(title, 25)}</h1>
                    <p className='SessionCube__text--description'>{renderLimitWords(description, 100)}</p>
                </div>
                <div className='SessionCube__date'>
                    <span>
                        <Moment format='HH:mm'>{start_date}</Moment>
                    </span>
                    <span>
                        <Moment tz="Asia/Jerusalem" format='DD/MM/YYYY'>{start_date}</Moment>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default SessionCube;