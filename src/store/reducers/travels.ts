import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import client from '../../api';
import { Travel, TravelsState } from '../../@types/travelers';

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

// Mettre à jour le travel
export const updateTravel = createAsyncThunk(
  'travels/update-travel',
  async (changesTravel: Travel) => {
    let changesContent = '';
    if (changesTravel.title) {
      changesContent += `title: "${changesTravel.title}",`;
    }
    if (changesTravel.to) {
      changesContent += `to: "${changesTravel.to}",`;
    }
    if (changesTravel.departureDate) {
      changesContent += `departureDate: "${changesTravel.departureDate}",`;
    }
    if (changesTravel.arrivalDate) {
      changesContent += `arrivalDate: "${changesTravel.arrivalDate}",`;
    }
    if (changesTravel.numberOfTravelers) {
      changesContent += `numberOfTravelers: ${changesTravel.numberOfTravelers},`;
    }

    try {
      const response = await client.axios.post('', {
        query: `
          mutation UpdateTravel($updateTravelId: Int!, $updateTravelInput: UpdateTravelInput!) {
            updateTravel(id: $updateTravelId, updateTravelInput: $updateTravelInput) {
              to
              title
              departureDate
              arrivalDate
            }
          }
        `,
        variables: {
          updateTravelId: changesTravel.id, // Utilisez l'ID du voyage pour mettre à jour
          updateTravelInput: { ...changesTravel }, // Utilisez les modifications du voyage pour mettre à jour
        },
      });

      const updatedTravel = response.data.data.updateTravel;

      // Retournez le voyage mis à jour pour l'utiliser dans le reducer
      return updatedTravel;
    } catch (error) {
      console.log(error);
      // Laissez l'erreur être gérée par l'action createAsyncThunk
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
