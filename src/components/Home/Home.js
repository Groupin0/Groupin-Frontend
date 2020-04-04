import React, {useEffect} from "react";
import Feed from "../Feed/Feed";
import {useDispatch} from "react-redux";
import {getMoreSessions, getSessions} from "../../state/actions";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        onGetSessions();
    }, []);

    const onGetSessions = async () => {
        await dispatch(getSessions());
    };

    const onGetMoreSessions = async  start => {
      return await dispatch(getMoreSessions(start));

    };

    return <Feed onLoadMoreSessions={onGetMoreSessions} />
};

export default Home;