import React from 'react';
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/app.scss';

// Pages
import Home from './js/components/pages/home/Home';
import EventRoutes from './js/routes/EventRoutes';
import NotFound from './js/components/NotFound.js';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/events" component={EventRoutes} />
      <Route render={() => <NotFound />} />
    </Switch>
  </Router>
);

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
