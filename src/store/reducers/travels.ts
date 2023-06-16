import { createAction, createReducer } from '@reduxjs/toolkit';

interface Travel {
  title: string;
  from: string;
  to: string;
  departureDate: Date;
  arrivalDate: Date;
  budget: number;
  numberOfAttendees: number;
}

interface TravelsState {
  travels: Travel[];
}

const initialState: TravelsState = {
  travels: [
    {
      title: 'Mon Super Voyage !',
      from: 'France',
      to: 'Italie',
      departureDate: Date(),
      arrivalDate: Date(),
      budget: 0,
      numberOfAttendees: 0,
    },
  ],
};

// mutation Mutation {
//   createTravel(createTravelInput: {
//     title: "Mon Super Voyage",
//     from: "France",
//     to: "Italie",
//     departureDate: "2024-01-01",
//     arrivalDate: "2024-04-01",
//     budget: 1312,
//     numberOfAttendees: 5,
//     organizerId: 5,
//   }) {
//     title
//   }
// }

export const createTravel = createAction<object>('travel/travel-create');

const travelReducer = createReducer(initialState, (builder) => {
  builder.addCase(createTravel, (state, action) => {
    state.travels.push(action.payload);
  });
});

export default travelReducer;
