import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { geolocated } from 'react-geolocated';
import { setUserLocation } from '../../redux/actions/map';
import { setSatelliteLocation } from '../../redux/actions/satellite';
import Map from './Map';

class MapContainer extends Component {
  componentDidUpdate(prevProps) {
    const { isGeolocationAvailable, coords, setUserLocation } = this.props;

    if (isGeolocationAvailable && coords) {
      if (
        !prevProps.coords ||
        prevProps.coords.latitude !== coords.latitude ||
        prevProps.coords.longitude !== coords.longitude
      ) {
        return setUserLocation({ lat: coords.latitude, lng: coords.longitude });
      }
    }
  }

  render() {
    const {
      coords,
      isGeolocationAvailable,
      setUserLocation,
      ...props
    } = this.props;

    return <Map {...props} />;
  }
}

MapContainer.propTypes = {
  isGeolocationAvailable: PropTypes.bool,
  coords: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number
  })
};

const mapStateToProps = state => {
  return {
    userLocation: state.map.userLocation,
    marker: state.satellite.position && {
      lat: state.satellite.position.lat,
      lng: state.satellite.position.lng
    }
  };
};

const mapDispatchToProps = {
  setUserLocation,
  setSatelliteLocation
};

export default compose(
  geolocated(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MapContainer);
