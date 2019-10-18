import React from "react";
import Home from './Home/Home';
import Header from './Header/Header';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
 } from "react-router-dom";

const App = () => (
  <div>
    <Header />
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
