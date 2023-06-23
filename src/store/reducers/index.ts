import { combineReducers } from 'redux';
import userReducer from './user';
import travelReducer from './travels';
import activityReducer from './activity';

export default combineReducers({
  activity: activityReducer,
  travels: travelReducer,
  user: userReducer,
});
