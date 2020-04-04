import React, {useEffect} from "react";
import Feed from "../Feed/Feed";
import {useDispatch} from "react-redux";
import {getSessions} from "../../state/actions";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSessions());
    });

    return <Feed/>
}

export default Home;