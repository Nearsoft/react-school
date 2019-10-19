import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/pages/home/Home';
import EventRoutes from './EventRoutes';
import NotFound from '../components/NotFound';

function AppRoutes(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/events" component={EventRoutes} />
      <Route render={() => <NotFound />} />
    </Switch>
  );
}


export default AppRoutes;
