import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Exercise as AjaxExercise } from './components/Pages/AjaxComponent/AjaxComponent';
import { Exercise as AjaxContainerExercise } from './components/Pages/ContainerComponent/ExerciseComponent';

export const routes = [
  {
    route: '/ajax',
    name: 'Ajax',
    component: AjaxExercise,
  },
  {
    route: '/container-presentation',
    name: 'Presentational and Container Components',
    component: AjaxContainerExercise,
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
