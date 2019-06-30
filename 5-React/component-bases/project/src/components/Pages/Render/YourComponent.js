import React from 'react';
import PropTypes from 'prop-types';

export const RenderCharacter = ({ }) => {
  return (
    <div className="Character_Card">
    </div>
  );
};

RenderCharacter.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  })
}
