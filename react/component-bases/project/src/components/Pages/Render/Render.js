import React, { Component } from 'react';
import { ExerciseContainer } from '../../common/ExerciseContainer/ExerciseContainer';
import { RenderCharacter as YourComponent } from './YourComponent';
import DataAPI from '../../../services/DataAPI';

const instructions = `YourComponent receives a "data" prop with a "name", "image" and "species" values.
  Render these values inside your component using the appropriate HTML tags. 
`;

export class Render extends Component {
  state = { data: {} }

  componentDidMount() {
    DataAPI.getCharacter(1).then(data => {
      this.setState({ data });
    })
  }

  render() {
   return (
     <div>
       <div className="Instructions__Title">
         Render
       </div>
       <div className="Instructions">
         {instructions}
       </div>
       <ExerciseContainer>
         <YourComponent data={this.state.data} />
       </ExerciseContainer>
     </div>
   )
 }
}
