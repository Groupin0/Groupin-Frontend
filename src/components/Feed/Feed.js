import React from "react";
import './Feed.scss';
import Session from "../Session/Session";
import {useSelector} from "react-redux";

const Feed = () => {
    const sessions = useSelector(state => state.sessions);
console.log(sessions);


    const renderSessions = () => sessions.map((session, i) => <Session data={session} className={i === 0 ? 'Session__first' : ''} key={i} />);

    return (
        <div className='Feed'>
            {renderSessions()}
        </div>
    )
};

export default Feed;