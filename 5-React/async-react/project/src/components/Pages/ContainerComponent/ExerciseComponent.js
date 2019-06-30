import React, { Component, Fragment } from 'react';
import { ExerciseContainer } from '../../common/ExerciseContainer/ExerciseContainer';
import { AjaxComponentContainer } from './AjaxComponentContainer';

const instructions = (
  <Fragment>
    <p>
      Using Asynchronous calls, have `YourComponent` use the <a href="https://rickandmortyapi.com/documentation">Rick & Morty API</a> to:

      <ul>
        <li>Display all episodes.</li>
        <li>After clicking on an episode have it display all characters for that episode.</li>
      </ul>

      Unlike the previous exercise where we added all the logic and presentation to a single component, you should now split up this functionality
      to follow the Presentational / Container Component pattern.
      </p>
  </Fragment>
);

export class Exercise extends Component {
  state = { data: {} }

  render() {
    return (
      <div>
        <div className="Instructions__Title">
          Presentational / Container Components
        </div>
        <div className="Instructions">
          {instructions}
        </div>
        <ExerciseContainer>
          <AjaxComponentContainer />
        </ExerciseContainer>
      </div>
    )
  }
}
