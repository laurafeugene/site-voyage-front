import { createAction, createReducer } from '@reduxjs/toolkit';

interface Travel {
  title: string;
  destinations: [];
  departureDate: Date;
  arrivalDate: Date;
  attendees: number;
}

interface TravelsState {
  travels: Travel[];
}

const initialState: TravelsState = {
  travels: [
    {
      title: 'Mon Super Voyage !',
      destinations: [],
      departureDate: Date(),
      arrivalDate: Date(),
      attendees: 0,
    },
  ],
};

export const createTravel = createAction<string>('travel/travel-create');

const travelReducer = createReducer(initialState, (builder) => {
  builder.addCase(createTravel, (state, action) => {
    state.travels.push(action.payload);
  });
});

export default travelReducer;
