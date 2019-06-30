import { SET_SATELLITE_LOCATION } from '../actions/satellite';

const initialState = {
  info: {
    satname: 'SPACE STATION',
    satid: 25544
  },
  position: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SATELLITE_LOCATION: {
      const { positions } = action.payload;
      const { satlatitude: lat, satlongitude: lng, ...position } = positions[
        positions.length - 1
      ];
      return {
        ...state,
        info: action.payload.info,
        position: {
          lat,
          lng,
          ...position
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;
