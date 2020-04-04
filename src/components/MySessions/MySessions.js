import React, {useEffect} from "react";
import './MySessions.scss';
import Feed from "../Feed/Feed";
import {useDispatch, useSelector} from "react-redux";
import {getUserSessions} from "../../state/actions";

const MySessions = () => {
    const userId = useSelector(state => state.user.id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserSessions(userId));
    }, []);

    return (
        <div className='MySessions'>
            <h1 className='MySessions__title'>המפגשים שלי</h1>
            <Feed isUserSessions={true} />
        </div>
    )
};

export default MySessions;