import React, { Component, Fragment } from 'react';
import { ExerciseContainer } from '../../common/ExerciseContainer/ExerciseContainer';
import { SearchCharacter as YourComponent } from './YourComponent';
import DataAPI from '../../../services/DataAPI';

const instructions = (
  <Fragment>
    <p>
      YourComponent receives a "onSearch" function prop, which when passed in a character
      name will send an updated "data" prop with a "name", "image" and "species" values with the character that matches the name.
    </p>
    <p>
      Add the event handling for updating the search terms and searching when you press the "Search" button.
      For rendering you should use the "Render" component from the previous exercise.
    </p>
  </Fragment>
);

export class StateAndEvents extends Component {
  state = { data: {} }

  searchByName = (name) => {
    DataAPI.searchCharacterByName(name).then(data => {
      if (data && data.results && data.results.length > 0) {
        this.setState({ data: data.results[0] });
      }
    })
  }

  render() {
    return (
      <div>
        <div className="Instructions__Title">
          State and Events
        </div>
        <div className="Instructions">
          {instructions}
        </div>
        <ExerciseContainer>
          <YourComponent data={this.state.data} onSearch={this.searchByName} />
        </ExerciseContainer>
      </div>
    )
  }
}
