import React from "react";
import './Feed.scss';
import SessionCube from "../SessionCube/SessionCube";
import {shallowEqual, useSelector} from "react-redux";
import Spinner from "../Shared/Spinner/Spinner";

const Feed = ({isUserSessions}) => {
    const {categories, sessions} = useSelector(state => ({
        categories: state.categories,
        sessions: state.sessions
    }), shallowEqual);

    const renderSessions = () => sessions.map((session, i) => {

        return <SessionCube
            data={{...session, category: categories.find(c => c.id === session.category)}}
            className={(i === 0 && !isUserSessions) ? 'SessionCube__first' : ''} key={i}/>
    });
    return (
        <div className='Feed'>
            {(sessions && categories) ? renderSessions() : <Spinner />}
        </div>
    )
};

export default Feed;