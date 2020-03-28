import React from "react";
import './App.scss';
import {Switch, Route} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Feed from "./Feed/Feed";

const App = () => {

  return (
      <div className='App'>
          <Navbar />

        <main className='App__main'>
            <Switch>
                <Route path='/' exact render={() => <Feed />} />
            </Switch>
        </main>
      </div>
  )
};

export default App;