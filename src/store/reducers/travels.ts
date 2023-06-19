import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { useAppSelector } from '../../hooks/redux';

interface Travel {
  title: string;
  from: string;
  to: string;
  departureDate: string;
  arrivalDate: string;
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

export const createTravel = createAsyncThunk(
  'travel/travel-create',
  async (newTravel) => {
    const response = await axios.post('https://qwikle-server.eddi.cloud/', {
      query: `mutation Mutation {
        createTravel(createTravelInput: {
          title: "${newTravel.title}",
          from: "France",
          to: "${newTravel.to}",
          departureDate: "${newTravel.departureDate}",
          arrivalDate: "${newTravel.arrivalDate}",
          budget: 1312,
          numberOfAttendees: ${newTravel.numberOfAttendees},
          organizerId: 5,
        }) {
          title
        }
      }`,
    });
    return newTravel;
  }
);

const travelReducer = createReducer(initialState, (builder) => {
  builder.addCase(createTravel.fulfilled, (state, action) => {
    state.travels.push(action.payload);
  });
});

export default travelReducer;
