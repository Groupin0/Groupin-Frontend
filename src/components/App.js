import React, {useEffect} from "react";
import './App.scss';
import {Switch, Route} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Feed from "./Feed/Feed";
import {getCategories, getSessions, switchLoading} from "../state/actions";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const loading = useSelector(state => state.loading);
    const dispath = useDispatch();

    useEffect(() => {
        console.log('test');
        fetchData();
    }, []);

    const fetchData = async () => {
        await dispath(getSessions());
        await dispath(getCategories());

        dispath(switchLoading(false));
    };
  return (
      <div className='App'>
          <Navbar />

          {!loading ? <main className='App__main'>
            <Switch>
                <Route path='/' exact render={() => <Feed />} />
            </Switch>
        </main> : ''}
      </div>
  )
};

export default App;