import { createAction, createReducer } from '@reduxjs/toolkit';

interface TravelState {
  travel: [];
}

const initialState: TravelState = {
  travel: [],
};

export const createTravel = createAction<string>('travel/travel-create');

const travelReducer = createReducer(initialState, (builder) => {
  builder.addCase(createTravel, (state, action) => {
    // push a new travel in TravelState
  });
});

export default travelReducer;
