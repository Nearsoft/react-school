import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataApi from '../../../services/DataAPI';
import { EpisodeList } from '../../common/EpisodeList/EpisodeList';

export class AjaxComponent extends Component {
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
    const { episodes } = this.state;

    return (
      <div>
        <EpisodeList episodes={episodes} />
      </div>
    );
  };
}

AjaxComponent.propTypes = {
}
