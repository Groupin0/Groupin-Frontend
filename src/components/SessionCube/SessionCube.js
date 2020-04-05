import React, {useCallback} from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import './SessionCube.scss';
import useResource from "../../hooks/useResources";

const SessionCube = ({data, className, onClickSession, isUserSession}) => {
    const {category, title, description, start_date, img_source, active} = data;

    const handleClickSession = (modalName) => {
        onClickSession(data, modalName)
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
            {isUserSession && <div className="SessionCube__edit" onClick={() => handleClickSession('editSessionModal')}><i className="far fa-edit" /></div>}
            <div className='SessionCube__img'
                 style={{backgroundImage: `url(${img_source !== null ? img_source : categoryImg})`}} />
            <div className='SessionCube__content'>
                <div className='SessionCube__text'>
                    <h1 className='SessionCube__text--title' onClick={() => handleClickSession('infoSessionModal')} >{renderLimitWords(title, 25)}</h1>
                    <p className='SessionCube__text--description'>{renderLimitWords(description, 100)}</p>
                </div>
                {active && <div className='SessionCube__date'>
                    <span>
                        <Moment format='HH:mm'>{start_date}</Moment>
                    </span>
                    <span>
                        <Moment tz="Asia/Jerusalem" format='DD/MM/YYYY'>{start_date}</Moment>
                    </span>
                </div>}
            </div>
        </div>
    )
};

export default SessionCube;