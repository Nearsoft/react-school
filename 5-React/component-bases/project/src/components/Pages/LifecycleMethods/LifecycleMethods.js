import React, { Component, Fragment } from 'react';
import { ExerciseContainer } from '../../common/ExerciseContainer/ExerciseContainer';
import { CharacterPolling as YourComponent } from './YourComponent';
import DataAPI from '../../../services/DataAPI';

const instructions = (
  <Fragment>
    <p>
      YourComponent receives a "getCharacter" function prop, which when called will get a random character and
      will send an updated "data" prop with a "name", "image" and "species" values.
    </p>
    <ol>
      <li>Add an interval to poll for a new character every 5 seconds.</li>
      <li>Every time a new character is passed in save the characters name and the amount of time it has showed up.</li>
      <li>Remember to destroy the interval when the component unmounts.</li>
    </ol>
  </Fragment>
);

export class LifecycleMethods extends Component {
  state = { data: {} }

  getCharacterByRandomId = () => {
    const randomId = Math.floor(Math.random() * (394 - 1 + 1)) + 1;
    DataAPI.getCharacter(randomId).then(data => {
      if (data) {
        this.setState({ data });
      }
    })
  }

  render() {
    return (
      <div>
        <div className="Instructions__Title">
          Lifecycle Methods
        </div>
        <div className="Instructions">
          {instructions}
        </div>
        <ExerciseContainer>
          <YourComponent data={this.state.data} getCharacter={this.getCharacterByRandomId} />
        </ExerciseContainer>
      </div>
    )
  }
}
