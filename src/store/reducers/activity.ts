import { createAction, createReducer } from '@reduxjs/toolkit';

interface ActivityState {
  activity: [];
}

const initialState: ActivityState = {
  activity: [],
};

export const addActivity = createAction('activity/add');

const activityReducer = createReducer(initialState, (builder) => {
  builder.addCase(addActivity, (state, action) => {
    
  });
});

export default activityReducer;
