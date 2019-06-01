import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Props } from './components/Pages/Props/Props';
import { Render } from './components/Pages/Render/Render';
import { StateAndEvents } from './components/Pages/StateAndEvents/StateAndEvents';
import { LifecycleMethods } from './components/Pages/LifecycleMethods/LifecycleMethods';

export const routes = [
  {
    route: '/props',
    name: 'Props',
    component: Props,
  },
  {
    route: '/render',
    name: 'Render',
    component: Render,
  },
  {
    route: '/state-events',
    name: 'State and Events',
    component: StateAndEvents,
  },
  {
    route: '/polling',
    name: 'Lifecycle Methods',
    component: LifecycleMethods,
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
