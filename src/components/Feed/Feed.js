import React, {useState} from "react";
import './Feed.scss';
import SessionCube from "../SessionCube/SessionCube";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import Spinner from "../Shared/Spinner/Spinner";
import Modal from "../Shared/Modal/Modal";
import Session from "../Session/Session";
import {openModal} from "../../state/actions";

const Feed = ({isUserSessions}) => {
    const [selectedSession, setSelectedSession] = useState(null);
    const dispatch = useDispatch();
    const {isModalOpen, infoSessionModal, categories, sessions} = useSelector(state => ({
        isModalOpen: state.modals.isModalOpen,
        infoSessionModal: state.modals.infoSessionModal,
        categories: state.categories,
        sessions: state.sessions
    }), shallowEqual);

    const renderSessions = () => sessions.map((session, i) => {

        const onSelectedSession = (session) => {
            setSelectedSession(session);
            dispatch(openModal('infoSessionModal'));

        };

        return <SessionCube
            data={{...session, category: categories.find(c => c.id === session.category)}}
            onClickSession={onSelectedSession}
            className={(i === 0 && !isUserSessions) ? 'SessionCube__first' : ''} key={i}/>
    });
    return (
        <div className='Feed'>
            {(sessions && categories) ? renderSessions() : <Spinner />}
            {infoSessionModal && <Modal modal='infoSessionModal'><Session session={selectedSession} /></Modal>}
        </div>
    )
};

export default Feed;