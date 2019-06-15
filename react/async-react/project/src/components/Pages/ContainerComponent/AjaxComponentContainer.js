import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DataApi } from '../../../services/DataAPI';
import { AjaxComponent } from './AjaxComponent';

export class AjaxComponentContainer extends Component {
  state = {
    episodes: [],
  }

  componentDidMount() {
    DataApi.getEpisodes()
      .then(data => {
        this.setState({
          episodes: data,
        });
      });
  }

  render() {
    return (
      <AjaxComponent episodes={this.state.episodes} />
    );
  };
}

AjaxComponentContainer.propTypes = {
}
