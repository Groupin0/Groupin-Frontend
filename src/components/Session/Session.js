import React, {useCallback} from "react";
import './Session.scss';
import useResource from "../../hooks/useResources";

const Session = ({data, className}) => {
    const {category, title, description, start_date, hour} = data;

    const renderLimitWords = useCallback((text, limit) => {

       if (text.length > limit) {
           return `${text.substring(0, limit)} ...`;
       }
       return text;
    }, []);


    const sessionPic = useResource(category.name);

    return (
        <div className={`Session ${className}`}>
            <div className='Session__img' style={{backgroundImage: `url(${sessionPic})`}}>
                {/*<img src={sessionPic} alt={sessionPic} />*/}
            </div>
            <div className='Session__content'>
                <div className='Session__text'>
                    <h1 className='Session__text--title'>{renderLimitWords(title, 25)}</h1>
                    <p className='Session__text--description'>{renderLimitWords(description, 100)}</p>
                </div>
                <div className='Session__date'>
                    {/*<span>{hour}</span>*/}
                    {/*<span>{start_date}</span>*/}
                </div>
            </div>
        </div>
    )
};

export default Session;