import React, {useEffect, useState} from "react";
import Feed from "../Feed/Feed";
import {useDispatch, useSelector} from "react-redux";
import {getMoreSessions, getSessions, isLoading} from "../../state/actions";
import Spinner from "../Shared/Spinner/Spinner";

const Home = () => {
    const loading = useSelector(state => state.loading);
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

    return (<>{!loading ? <Feed onLoadMoreSessions={onGetMoreSessions} /> : <Spinner />}</>)
};

export default Home;