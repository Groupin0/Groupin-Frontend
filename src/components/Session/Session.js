import React, {useCallback} from "react";
import './Session.scss';
import useResource from "../../hooks/useResources";

const Session = props => {
    const {category, title, desc, date, hour} = props.data;

    const renderLimitWords = useCallback((text, limit) => {

       if (text.length > limit) {
           return `${text.substring(0, limit)} ...`;
       }
       return text;
    }, []);


    const sessionPic = useResource(category, 'jpg');

    return (
        <div className={`Session ${props.className}`}>
            <div className='Session__img'>
                <img src={sessionPic} alt=""/>
            </div>
            <div className='Session__content'>
                <div className='Session__text'>
                    <h1 className='Session__text--title'>{renderLimitWords(title, 25)}</h1>
                    <p className='Session__text--description'>{renderLimitWords(desc, 100)}</p>
                </div>
                <div className='Session__date'>
                    <span>{hour}</span>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    )
};

export default Session;