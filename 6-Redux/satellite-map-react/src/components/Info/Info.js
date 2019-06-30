import PropTypes from 'prop-types';
import React from 'react';

const Info = ({ info, location }) => {
  const renderSatelliteInfo = () => {
    if (!info) {
      return null;
    }

    return (
      <div className="Satellite">
        <p>Sat Name: {info.satname}</p>
        <p>Sat ID: {info.satid}</p>
      </div>
    );
  };

  const renderSatelliteLocation = () => {
    if (!location || !location.lat) {
      return null;
    }

    const dateTimeString = new Date(location.timestamp * 1000);

    return (
      <div className="Location">
        <p>Azimuth: {location.azimuth}</p>
        <p>Elevation: {location.elevation}</p>
        <p>Altitude: {location.sataltitude}</p>
        <p>Latitude: {location.lat}</p>
        <p>Longitude: {location.lng}</p>
        <p>
          Timestamp:{' '}
          {`${dateTimeString.toLocaleDateString()} ${dateTimeString.toLocaleTimeString()}`}
        </p>
      </div>
    );
  };

  return (
    <div className="Info">
      <div>
        <h2>Satellite Information</h2>
        {renderSatelliteInfo()}
        <hr />
        {renderSatelliteLocation()}
      </div>
    </div>
  );
};

Info.propTypes = {
  info: PropTypes.shape({
    satname: PropTypes.string,
    satid: PropTypes.number
  }),
  location: PropTypes.shape({
    azimuth: PropTypes.number,
    elevation: PropTypes.number,
    lat: PropTypes.number,
    lng: PropTypes.number,
    sataltitude: PropTypes.number,
    timestamp: PropTypes.number
  })
};

export default Info;
