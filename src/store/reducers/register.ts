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

export const createNewUser = createAction<string>('register/createNewUser');

const registerReducer = createReducer(initialState, (builder) => {
  builder.addCase(createNewUser, (state, action) => {
    console.log('New user created');
  });
});

export default registerReducer;
