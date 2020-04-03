import React, {useEffect, useState} from "react";
import './App.scss';
import {Switch, Route, Redirect} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Feed from "./Feed/Feed";
import {getCategories, getSessions, getUser, switchLoading} from "../state/actions";
import {useDispatch, useSelector} from "react-redux";
import Login from "./Login/Login";
import history from '../history';
import Spinner from "./Shared/Spinner/Spinner";

const App = () => {
    const [loading, setLoading] = useState(true);
    const dispath = useDispatch();

    useEffect(() => {
        console.log('test');
        fetchData();
    }, []);

    const fetchData = async () => {
        await dispath(getSessions());
        await dispath(getCategories());
        await dispath(getUser());

        setLoading(false);
    };

  return (
      <div className='App'>
          <Navbar />
          {!loading ? <main className='App__main'>
            <Switch>
                <Route path='/' exact render={() => <Feed />} />
                <Route path='/login' exact render={() => <Login />} />
                <Route path='/#_=_' exact>
                    {history.push('/')}
                </Route>
            </Switch>
        </main> : <Spinner />}
      </div>
  )
};

export default App;