import {useState} from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Login from './Login';
import Home from './Home';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/dashboard">
          <Header />
          <Home />
          </Route>

          <Route path="/">
            <Login />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
