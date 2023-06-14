import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
  isLogged: boolean;
  token: string;
  refreshToken: string;
  firstName: string;
  email: string;
  password: string;
}

const initialState: UserState = {
  isLogged: false,
  token: '',
  refreshToken: '',
  firstName: '',
  email: '',
  password: '',
};

export async function registerUser(newUser) {
  const signUpQuery = `
    mutation Mutation {
      signUp(signUpInput: {
          email : "${newUser.email}",
          password: "${newUser.password}",
          confirmPassword: "${newUser.confirmPassword}",
          firstname: "${newUser.firstName}",
          lastname: "${newUser.lastName}"
      }) {
        user {
          firstname
          lastname
        }
      }
    }
  `;
  await axios({
    url: 'https://qwikle-server.eddi.cloud/',
    method: 'post',
    data: {
      query: signUpQuery,
    },
  }).then((result) => {
    // console.log(result);
    return result;
  });
}

// a renommer
export const createNewUser = createAction<object>('register/create-new-user');

// a renommer
const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(createNewUser, (state, action) => {
    state.newUser = action.payload;
    // appel au back
    // recupere tokens => envoi dans le store
    // met isLogged a true
    // erreur dans le store ? dans ce store là ? un expres pour les erreurs ?
    // dans le composant connection : recupère erreur ou succes et affiche en conséquence
  });
});

export default userReducer;
