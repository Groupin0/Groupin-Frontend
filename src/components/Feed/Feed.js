import React, {useEffect} from "react";
import './Feed.scss';
import Session from "../Session/Session";
import {useSelector} from "react-redux";

const Feed = ({children}) => {
    const {categories, sessions} = useSelector(state => ({
        categories: state.categories,
        sessions: state.sessions
    }));

    const renderSessions = () => sessions.map((session, i) => {

        return <Session
            data={{...session, category: categories.find(c => c.id === session.category)}}
            className={i === 0 ? 'Session__first' : ''} key={i}/>
    });
    return (
        <div className='Feed'>
            {children}
            {renderSessions()}
        </div>
    )
};

export default Feed;