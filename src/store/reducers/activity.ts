import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

interface ActivityState {
  activity: [];
}

const initialState: ActivityState = {
  activity: [],
};

const addActivityQuery = `
  mutation Mutation {
    createActivity(createActivityInput: {
      name: "${name}",
      price: ${price},
      location: "${location}",
      members: ${members},
      time: "${time}",
      date: "${date}",
      travelId: ${travelId},
      categoryId: ${categoryId},    
    }) {
      name
    }
  }
`;

export const addActivity = createAsyncThunk(
  'activity/add-activity',
  async () => {
    const response = await axios.post('https://qwikle-server.eddi.cloud/', {
      query: addActivityQuery,
    });
    return response;
  }
);

const activityReducer = createReducer(initialState, (builder) => {
  builder.addCase(addActivity, (state, action) => {
    
  });
});

export default activityReducer;
