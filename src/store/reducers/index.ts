import { combineReducers } from 'redux';
import userReducer from './user';
import travelsReducer from './travels';
import activitiesReducer from './activities';

export default combineReducers({
  activities: activitiesReducer,
  travels: travelsReducer,
  user: userReducer,
});
