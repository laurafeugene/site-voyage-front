import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

interface ActivityState {
  activity: [];
}

const initialState: ActivityState = {
  activity: [],
};

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

const activityReducer = createReducer(initialState, (builder) => {
  builder.addCase(addActivity.fulfilled, (state, action) => {
    console.log(action.payload);
    // state.activity.push(action.payload);
  });
});

export default activityReducer;
