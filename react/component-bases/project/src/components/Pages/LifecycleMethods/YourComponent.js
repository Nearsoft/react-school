import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RenderCharacter } from '../Render/YourComponent';

export class CharacterPolling extends Component {
  state = { characterShowedUp: [{ name: 'Rick', amount: 0 }] }

  render() {
    const { data } = this.props;

    return (
      <div className="Character_Card">
        <h2>Poll Characters</h2>
        {
          this.state.characterShowedUp.length &&
          <ul className="list">
            {
              this.state.characterShowedUp.map(({ name, amount }) => {
                return <li key={name}>{`${name}: ${amount}`}</li>;
              })
            }
          </ul>
        }
        <RenderCharacter data={data} />
      </div>
    );
  };
}

CharacterPolling.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  }),
  onSearch: PropTypes.func.isRequired,
}
