import { SET_USER_LOCATION } from '../actions/map';

const initialState = {
  userLocation: {
    lat: 29.097582,
    lng: -111.021851
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOCATION: {
      return {
        ...state,
        userLocation: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
