import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';
import SatelliteAPI from '../../services/SatelliteAPI';

const satelliteInterval = 1000 * 10;

export class Map extends Component {
  componentDidMount() {
    this.getSatellitePosition();
    this.interval = setInterval(() => {
      this.getSatellitePosition();
    }, satelliteInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getSatellitePosition = () => {
    SatelliteAPI.getPositions(this.props.userLocation).then(data => {
      this.props.setSatelliteLocation(data);
    });
  };

  render() {
    const { userLocation, marker } = this.props;

    return (
      <GoogleMap defaultZoom={4} defaultCenter={userLocation}>
        {marker && marker.lat && <Marker position={marker} />}
      </GoogleMap>
    );
  }
}

Map.propTypes = {
  marker: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  userLocation: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  setSatelliteLocation: PropTypes.func.isRequired
};

export default compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(Map);
