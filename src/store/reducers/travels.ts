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

export async function getTravelById(id: number) {
  try {
    const response = await client.axios.post('', {
      query: `query Query {
                travel(id: ${id}) {
                  arrivalDate
                  travelers {
                    firstname
                    lastname
                  }
                  budget
                  departureDate
                  numberOfTravelers
                  title
                }
              }
              `,
    });
    return response.data.data.travel;
  } catch (error) {
    console.log(error);
  }
}

export const updateTravel = createAsyncThunk(
  'travels/updateTravel',
  async (data: { id: number; changes: any }) => {
    const { id, changes } = data;
    try {
      const response = await client.axios.post('', {
        query: `
          mutation UpdateTravelMutation(${id}: Int!, ${changes}: UpdateTravelInput!) {
            updateTravel(id: ${id}, updateTravelInput: ${changes}) {
              to
              title
              numberOfTravelers
              id
              departureDate
              arrivalDate
            }
          }
        `,
        variables: {
          id,
          changes,
        },
      });

      return response.data.data.updateTravel;
    } catch (error) {
      console.log(error);
      // Vous pouvez également gérer les erreurs ici en renvoyant une valeur appropriée
      throw error;
    }
  }
);

const travelsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createTravel.fulfilled, (state, action) => {
      state.travels.push(action.payload);
    })
    .addCase(getAllTravels.fulfilled, (state, action) => {
      state.travels = action.payload;
    })
    .addCase(updateTravel.fulfilled, (state, action) => {
      const updatedTravel = action.payload;
      const index = state.travels.findIndex(
        (travel) => travel.id === updatedTravel.id
      );
      if (index !== -1) {
        state.travels[index] = updatedTravel;
      }
    });
});

export default travelsReducer;
