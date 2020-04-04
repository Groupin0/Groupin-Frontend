import React, {useState} from "react";
import './Feed.scss';
import SessionCube from "../SessionCube/SessionCube";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import Spinner from "../Shared/Spinner/Spinner";
import Modal from "../Shared/Modal/Modal";
import Session from "../Session/Session";
import {openModal} from "../../state/actions";

const Feed = ({isUserSessions, onLoadMoreSessions}) => {
    const [loadMore, setLoadMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [selectedSession, setSelectedSession] = useState(null);
    const dispatch = useDispatch();
    const {infoSessionModal, categories, sessions} = useSelector(state => ({
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
            {(sessions && categories) ? renderSessions() : <Spinner/>}
            {infoSessionModal && <Modal modal='infoSessionModal'><Session session={selectedSession}/></Modal>}
            {loadMore && <div className='Feed__load-more' onClick={handleLoadMoreSessions}>{
                !loading ? 'טען עוד..' :    <Spinner />
            }</div>}
        </div>
    )
};

export default Feed;