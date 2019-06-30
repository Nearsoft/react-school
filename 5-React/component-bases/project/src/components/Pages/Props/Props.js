import React from 'react';
import { ExerciseContainer } from '../../common/ExerciseContainer/ExerciseContainer';
import { YourComponent } from './YourComponent';

const instructions = `Create a component that passes down a list of items to render.
  Also, make it so the child component calls a function passed down to the parent every time an item
  is clicked.
`;

export const Props = () => {
  return (
    <div>
      <div className="Instructions__Title">
        Props
      </div>
      <div className="Instructions">
        {instructions}
      </div>
      <ExerciseContainer>
        <YourComponent />
      </ExerciseContainer>
    </div>
  )
}
