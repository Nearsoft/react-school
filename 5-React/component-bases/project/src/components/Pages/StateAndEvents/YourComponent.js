import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RenderCharacter } from '../Render/YourComponent';

export class SearchCharacter extends Component {
  state = { search: '' }

  render() {
    const { data } = this.props;

    return (
      <div className="Character_Card">
        <h2>Search character by name</h2>
        <input type="text" className="search" value={this.state.search} />
        <button className="btn-search">Search</button>
        <RenderCharacter data={data} />
      </div>
    );
  };
}

SearchCharacter.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  }),
  onSearch: PropTypes.func.isRequired,
}
