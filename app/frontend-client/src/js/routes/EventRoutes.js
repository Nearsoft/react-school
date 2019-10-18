import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Events from '../components/pages/events/Events';
import SingleEvent from '../components/pages/events/SingleEvent';
import SignInEvent from '../components/pages/events/SignInEvent';

function EventRoutes() {
  return (
    <Switch>
      <Route path="/events" exact component={Events}/>
      <Route path="/events/:id" exact component={SingleEvent}/>
      <Route path="/events/:eventId/register" exact component={SignInEvent}/>
    </Switch>
  );
}

export default EventRoutes;
