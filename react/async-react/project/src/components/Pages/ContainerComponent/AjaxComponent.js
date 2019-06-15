import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EpisodeList } from '../../common/EpisodeList/EpisodeList';

export const AjaxComponent = ({ episodes }) => {
  return (
    <div>
      <EpisodeList episodes={episodes} />
    </div>
  );
}

AjaxComponent.propTypes = {
}
