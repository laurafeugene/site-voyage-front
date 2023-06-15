import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

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

// Createaction permet de créer une action avec un payload (ici le user)
export const loginSuccess = createAction('user/loginSucess');
export const createNewUser = createAction('user/createNewUser');

// Création d'un nouvel utilisateur
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

// Connexion d'un utilisateur avec le state
const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(loginSuccess, (state, action) => {
    // Récupération des tokens
    // Action.payload sert à récupérer les données envoyées par l'action
    const { accessToken, refreshToken } = action.payload;
    state.isLogged = true;
    state.token = accessToken;
    state.refreshToken = refreshToken;
    // Enregistrement des cookies
    Cookies.set('accessToken', accessToken);
    Cookies.set('refreshToken', refreshToken);
  });
});
// Connexion à l'API pour vérifier les identifiants
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('https://qwikle-server.eddi.cloud/', {
      query: `
        mutation SignInMutation {
          signIn(signInInput: {
            email: "${email}",
            password: "${password}"
          }) {
            token {
              accessToken
              refreshToken
            }
          }
        }
      `,
    });

    const { data } = response.data;
    // A REGARDER ERREUR PLUS TARD
    if (data && data.signIn && data.signIn.token) {
      const { accessToken, refreshToken } = data.signIn.token;

      // Dispatch de l'action loginSuccess pour mettre à jour le state de l'utilisateur
      dispatch(loginSuccess({ accessToken, refreshToken }));

      window.location.href = '/voyages';
    } else {
      alert('Identifiants incorrects');
    }
  } catch (error) {
    console.log(error);
    alert('Erreur lors de la connexion');
  }
};

export default userReducer;
