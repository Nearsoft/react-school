import React from 'react';
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/app.scss';

// Pages
import Home from './js/pages/Home';
import Events from './js/pages/Events';
import SingleEvent from './js/pages/SingleEvent';
import SignInEvent from './js/pages/SignInEvent';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/events" exact component={Events} />
      <Route path="/event/:eventId" exact component={SingleEvent} />
      <Route path="/event/:eventId/signin" exact component={SignInEvent} />
    </Switch>
  </Router>
);

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
