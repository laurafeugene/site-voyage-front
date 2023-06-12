import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
  newUser: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}

export const initialState: UserState = {
  newUser: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
};

export async function registerUser(data) {
  await axios({
    url: 'https://qwikle-server.eddi.cloud/',
    method: 'post',
    data: {
      query: `
        mutation CreateUser($createUserCreateUserInput2: CreateUserInput!) {
          createUser(createUserInput: $createUserCreateUserInput2) {
            email
            firstname
            lastname
          }
        }`,
    },
  }).then((result) => {
    console.log(result);
  });
}

export const createNewUser = createAction<object>('register/create-new-user');

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(createNewUser, (state, action) => {
    state.newUser = action.payload;
  });
});

export default userReducer;
