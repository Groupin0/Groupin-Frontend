import React from "react";
import './Feed.scss';
import SessionCube from "../SessionCube/SessionCube";
import {shallowEqual, useSelector} from "react-redux";

const Feed = ({children}) => {
    const {categories, sessions} = useSelector(state => ({
        categories: state.categories,
        sessions: state.sessions
    }), shallowEqual);

    const renderSessions = () => sessions.map((session, i) => {

        return <SessionCube
            data={{...session, category: categories.find(c => c.id === session.category)}}
            className={i === 0 ? 'SessionCube__first' : ''} key={i}/>
    });
    return (
        <div className='Feed'>
            {children}
            {renderSessions()}
        </div>
    )
};

export default Feed;