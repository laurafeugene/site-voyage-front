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
  id: number;
}

interface TravelsState {
  travels: Travel[];
}

const initialState: TravelsState = {
  travels: [],
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
          id
          from
          to
          departureDate
          arrivalDate
          budget
          numberOfTravelers
        }
      }`,
    });
    const data = response.data.data.createTravel;
    return data;
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
            from
            to
          }
        }
      }`,
    });
    return response.data.data.me.travels; // sort un tableau
  } catch (error) {}
}

const travelsReducer = createReducer(initialState, (builder) => {
  builder.addCase(createTravel.fulfilled, (state, action) => {
    state.travels.push(action.payload);
  });
});

export default travelsReducer;
