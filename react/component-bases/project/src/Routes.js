import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Props } from './components/Pages/Props/Props';

export const routes = [
  {
    route: '/props',
    name: 'Props',
    component: Props,
  },
]

const Routes = () => {
  return (
    <Switch>
      {
        routes.map(({ route, name, component }) => (
          <Route path={route} component={component} key={name} />
        ))
      }
      <Route path="/" component={() => <div>Home</div>} />
    </Switch>
  )
}

export default Routes;
