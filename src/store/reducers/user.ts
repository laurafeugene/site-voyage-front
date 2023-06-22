import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { redirect } from 'react-router';

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
export const setIsLogged = createAction<boolean>('user/setIsLogged');
export const logOut = createAction('user/logOut');

// Création d'un nouvel utilisateur
export async function registerUser(newUser) {
  const signUpQuery = `
    mutation Mutation {
      signUp(signUpInput: {
          email : "${newUser.email}",
          password: "${newUser.password}",
          confirmPassword: "${newUser.confirmPassword}",
          firstname: "${newUser.firstName}"
          lastname: "${newUser.lastName}"
      }) {
        user {
          firstname
        }
      }
    }
  `;

  const response = await axios({
    url: 'https://qwikle-server.eddi.cloud/',
    method: 'post',
    data: {
      query: signUpQuery,
    },
  });
  return response.data;
}

// Connexion d'un utilisateur avec le state
const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIsLogged, (state, action) => {
      state.isLogged = action.payload;
    })

    .addCase(logOut, (state, _action) => {
      // Supprimer les cookies
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');

      // Vider le header de axios
      axios.defaults.headers.common.Authorization = '';

      state.isLogged = false;
    })

    .addCase(loginSuccess, (state, action) => {
      // Récupération des tokens
      // Action.payload sert à récupérer les données envoyées par l'action
      const { accessToken, refreshToken } = action.payload;
      state.isLogged = true;
      axios.defaults.headers.common.Authorization = `${accessToken}`;

      // Enregistrement des cookies
      Cookies.set('accessToken', accessToken);
      Cookies.set('refreshToken', refreshToken);
      console.log('logged');
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
    } else {
      alert('Identifiants incorrects');
    }
  } catch (error) {
    console.log(error);
    alert('Erreur lors de la connexion');
  }
};

export const stores = configureStore({
  reducer: {
    userReducer,
  },
});

export default userReducer;
