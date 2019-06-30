import React, { Component, Fragment } from 'react';
import { ExerciseContainer } from '../../common/ExerciseContainer/ExerciseContainer';
import { AjaxComponent } from './YourComponent';

const instructions = (
  <Fragment>
    <p>
      This time we are going to be getting the data all on our own!

      Using Asynchronous calls, have `YourComponent` use the <a href="https://rickandmortyapi.com/documentation">Rick & Morty API</a> to:

      <ul>
        <li>Display all episodes.</li>
        <li>After clicking on an episode have it display all characters for that episode.</li>
      </ul>

      Utilize the "common" components inside of the `/components/common` folder so we can later reutilize these for later exercises.
      </p>
  </Fragment>
);

export class Exercise extends Component {
  state = { data: {} }

  render() {
    return (
      <div>
        <div className="Instructions__Title">
          AJAX Component
        </div>
        <div className="Instructions">
          {instructions}
        </div>
        <ExerciseContainer>
          <AjaxComponent />
        </ExerciseContainer>
      </div>
    )
  }
}
