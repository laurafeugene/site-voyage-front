import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Activity {
  name: string;
  location: string;
  price: number;
  time: string;
}

export interface ActivityState {
  activities: Activity[];
}
const initialState: ActivityState = {
  activities: [],
};

// export async function getActivities() {
//   try {
//     const response = await axios.post('https://qwikle-server.eddi.cloud/', {
//       query: `query ActivitiesByDate {
//         me {
//           travels {
//             activities {
//               name
//               location
//               price
//               time
//               category {
//                 name
//               }
//             }
//             }
//           }
//         }
//       }`,
//     });
//     return response.data.data.activities;
//   } catch (error) {}
// }

export const addActivity = createAsyncThunk(
  'activity/add-activity',
  async (newActivity) => {
    const addActivityQuery = `
      mutation Mutation {
        createActivity(createActivityInput: {
          name: "${newActivity.name}",
          price: ${newActivity.price},
          location: "${newActivity.location}",
          members: ${newActivity.members},
          time: "${newActivity.time}",
          date: "${newActivity.date}",
          travelId: ${newActivity.travelId},
          categoryId: ${newActivity.categoryId},    
        }) {
          name
        }
      }
    `;
    const response = await axios.post('https://qwikle-server.eddi.cloud/', {
      query: addActivityQuery,
    });
    return response;
  }
);

const activitiesReducer = createReducer(initialState, (builder) => {
  builder.addCase(addActivity.fulfilled, (state, action) => {
    console.log(action.payload);
    // state.activity.push(action.payload);
  });
});

export default activitiesReducer;
