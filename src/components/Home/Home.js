import React, {useEffect} from "react";
import Feed from "../Feed/Feed";
import {useDispatch} from "react-redux";
import {getMoreSessions, getSessions} from "../../state/actions";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        onGetSessions();
    }, []);

    const onLoadMoreSessions = async (start) => {
        if (start) {
            return await dispatch(getMoreSessions(start));
        }
    };

    const onGetSessions = async () => {
        await dispatch(getSessions());
    };

    return <Feed loadMoreSession={onLoadMoreSessions}/>
};

export default Home;