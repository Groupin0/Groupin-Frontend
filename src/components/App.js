import React from "react";
import './App.scss';
import {Switch, Route} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Feed from "./Feed/Feed";
import About from "./About/About";
import Contact from "./Contact/Contact";

const App = () => {

  return (
      <div className='App'>
          <Navbar />

        <main className='App__main'>
            <Switch>
                <Route path='/' exact render={() => <Feed />} />
                <Route path='/about' exact render={() => <About />} />
                <Route path='/contact' exact render={() => <Contact />} />
            </Switch>
        </main>
      </div>
  )
};

export default App;