import { combineReducers } from 'redux';
import map from './map';
import satellite from './satellite';

export default combineReducers({
  map,
  satellite
});
