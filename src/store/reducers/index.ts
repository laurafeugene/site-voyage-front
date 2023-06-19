import { combineReducers } from 'redux';
import userReducer from './user';
import travelReducer from './travels';

export default combineReducers({
  user: userReducer,
  travels: travelReducer,
});
