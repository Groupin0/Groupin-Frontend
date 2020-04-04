import React from "react";
import './Feed.scss';
import SessionCube from "../SessionCube/SessionCube";
import {shallowEqual, useSelector} from "react-redux";
import Spinner from "../Shared/Spinner/Spinner";
import Modal from "../Shared/Modal/Modal";
import Session from "../Session/Session";

const Feed = ({isUserSessions}) => {
    const {isModalOpen, infoSessionModal, categories, sessions} = useSelector(state => ({
        isModalOpen: state.modals.isModalOpen,
        infoSessionModal: state.modals.infoSessionModal,
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
            {isModalOpen && <Modal><Session /></Modal>}
        </div>
    )
};

export default Feed;