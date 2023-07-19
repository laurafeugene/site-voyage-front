import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import client from '../../api';
import { TravelsState } from '../../@types/travelers';

const initialState: TravelsState = {
  travels: [],
};

export const createTravel = createAsyncThunk(
  'travels/create-travel',
  async (newTravel) => {
    const response = await client.axios.post('', {
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

export const getAllTravels = createAsyncThunk(
  'travels/get-travels',
  async () => {
    const getAllTravelsQuery = `
      query Me {
        me {
          travels {
            id
            title
            from
            to
            departureDate
            arrivalDate
            budget
            numberOfTravelers
            organizerId
            organizer {
              id
              firstname
              lastname
              email
            }
            travelers {
              id
              firstname
              lastname
              email
            }
            activities {
              id
              name
              price
              location
              members
              time
              date
              travelId
              categoryId
            }
          }
        }
      }
    `;
    const response = await client.axios.post('', {
      query: getAllTravelsQuery,
    });
    return response.data.data.me.travels; // sort un tableau
  }
);

const travelsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createTravel.fulfilled, (state, action) => {
      state.travels.push(action.payload);
    })
    .addCase(getAllTravels.fulfilled, (state, action) => {
      state.travels = action.payload;
    });
});

export default travelsReducer;
