import React, {useEffect} from "react";
import history from '../../history';
import './MySessions.scss';
import Feed from "../Feed/Feed";
import {useDispatch, useSelector} from "react-redux";
import {getMoreSessions, getMoreSessionsByUserId, getUserSessions} from "../../state/actions";

const MySessions = () => {
    const userId = useSelector(state => state.user ? state.user.id : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userId) return history.push('/');
        dispatch(getUserSessions(userId));
    }, []);

    const onGetMoreSessions = async  start => {
        return await dispatch(getMoreSessionsByUserId(userId, start));
    };

    return (
        <div className='MySessions'>
            <h1 className='MySessions__title'>המפגשים שלי</h1>
            <Feed isUserSessions={true} onLoadMoreSessions={onGetMoreSessions} />
        </div>
    )
};

export default MySessions;