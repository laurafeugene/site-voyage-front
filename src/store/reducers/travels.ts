import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Travel {
  title: string;
  from: string;
  to: string;
  departureDate: string;
  arrivalDate: string;
  budget: number;
  numberOfTravelers: number;
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
      numberOfTravelers: 0,
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
          budget: 10,
          numberOfTravelers: ${newTravel.numberOfTravelers},
          organizerId: ${newTravel.userId},
        }) {
          title
        }
      }`,
    });
    return newTravel;
  }
);

export async function getHistoricTravels() {
  try {
    const response = await axios.post('https://qwikle-server.eddi.cloud/', {
      query: `query Me {
        me {
          travels {
            id
            title
            departureDate
            arrivalDate
            budget
            numberOfTravelers
            to
          }
        }
      }`,
    });
    return response.data.data.me.travels; // sort un tableau
  } catch (error) {}
}

const travelReducer = createReducer(initialState, (builder) => {
  builder.addCase(createTravel.fulfilled, (state, action) => {
    state.travels.push(action.payload);
  });
});

export default travelReducer;
