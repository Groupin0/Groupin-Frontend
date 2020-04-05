import React from 'react';
import './Session.scss';
import Moment from 'react-moment';
import 'moment-timezone';
import Button from '../Button/Button.js';
import useResource from "../../hooks/useResources";
import {importZoomUrl} from "../../services/platformService";



const Session = ({session}) => {
    const {category, title, start_date, end_date, capacity, description, platform_media_id, platform_media_pwd} = session;

    const categoryImg = useResource(category.name);

    return (
        <div className='Session'>
            <div className='Session__img'
                style={{backgroundImage: `url("${ categoryImg }")`}} />
            <div className='Session__content'>
                <div className='Session__header'>
                    <div>
                        <h1 className='Session__header--title'> { title } </h1>
                        <div className='Session__header--info'>
                            <div className='Session__header--text'>
                                 ביום <Moment format='DD/MM/YYYY'>{ start_date }</Moment>
                            </div>
                            <div className='Session__header--text'>
                                בין השעות
                                <Moment format= ' HH:mm '>{ start_date }</Moment>
                                -
                                <Moment format= ' HH:mm '>{ end_date }</Moment>
                            </div>
                            <div className='Session__header--text'>
                                <p>{capacity ? `מוגבל ל-${capacity} משתתפים` : 'ללא הגבלת משתתפים'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='Session__header--action'>
                        <a target= '_blank' href={ importZoomUrl(platform_media_id, platform_media_pwd)}>
                            <Button label='לצפייה במפגש' className='Button__black' isDisabled={ !platform_media_id } />
                        </a>
                    </div>
                </div>
                <div className='Session__description'>
                    <p className='Session__description--text'>
                    { description }
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Session;