import React, {useEffect, useState} from "react";
import './Feed.scss';
import querystring from 'query-string';
import history from '../../history';
import SessionCube from "../SessionCube/SessionCube";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import Spinner from "../Shared/Spinner/Spinner";
import Modal from "../Shared/Modal/Modal";
import Session from "../Session/Session";
import {openModal} from "../../state/actions";
import EditSession from "../Shared/EditSession/EditSession";
import NoSessions from "../Shared/NoSessions/NoSessions";


const removeQueryParam = (param) => {
    let url = new URL(window.location.search);
    let params = new URLSearchParams(url.search.slice(1));

    params.delete(param)
};

const Feed = ({isUserSessions, onLoadMoreSessions}) => {
    const {infoSessionModal, editSessionModal, categories, sessions} = useSelector(state => ({
        containerLoading: state.loading,
        infoSessionModal: state.modals.infoSessionModal,
        editSessionModal: state.modals.editSessionModal,
        categories: state.categories,
        sessions: state.sessions
    }), shallowEqual);
    const [loadMore, setLoadMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [selectedSession, setSelectedSession] = useState(null);
    const dispatch = useDispatch();


    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        const params = querystring.parse(window.location.search);

        if (params['session_id']) {
            const session = sessions.find(s => s.id === params['session_id']);
            if (session && !infoSessionModal) {
                setSelectedSession(session);
                dispatch(openModal('editSessionModal'));
            }
                history.push('/my-sessions')
        }
    }, [sessions]);

    const renderSessions = () => sessions.map((session, i) => {

        const onSelectedSession = (session, modalName) => {
            setSelectedSession(session);
            dispatch(openModal(modalName));
        };

        return <SessionCube
            data={{...session, category: categories.find(c => c.id === session.category)}}
            onClickSession={onSelectedSession}
            isUserSession={isUserSessions}
            className={(i === 0 && !isUserSessions) ? 'SessionCube__first' : ''} key={session.id}/>
    });

    const handleLoadMoreSessions = async () => {
        setLoading(true);
        const hasMore = await onLoadMoreSessions(sessions.length);

        if (!hasMore) {
            setLoadMore(false);
        }
        setLoading(false);
    };

    return (
            <div className='Feed'>
            {(sessions.length > 0 && categories.length > 0) ? renderSessions() : <NoSessions />}
            {infoSessionModal && <Modal modal='infoSessionModal'><Session session={selectedSession} /></Modal>}
            {editSessionModal && <Modal modal='editSessionModal'><EditSession session={selectedSession} /></Modal>}
            {(loadMore && sessions.length >= 20) && <div className='Feed__load-more' onClick={handleLoadMoreSessions}>{
                !loading ? 'טען עוד..' :    <Spinner />}</div>}
        </div>
    )
};

export default Feed;