import { createAction, createReducer } from '@reduxjs/toolkit';

interface RegisterState {
  newUser: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}

export const initialState: RegisterState = {
  newUser: {
    firstName: 'toto',
    lastName: 'michel',
    email: 'toto@michel.com',
    password: 'toto',
  },
};

export const createNewUser = createAction<object>('register/createNewUser');

const registerReducer = createReducer(initialState, (builder) => {
  builder.addCase(createNewUser, (state, action) => {
    state.newUser.email = action.payload.email;
    state.newUser.firstName = action.payload.firstName;
    state.newUser.lastName = action.payload.lastName;
    state.newUser.password = action.payload.password;
  });
});

export default registerReducer;
