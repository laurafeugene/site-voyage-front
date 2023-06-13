import {
  createAction,
  createAsyncThunk,
  createReducer,
  useReducer,
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
// a modifier
export const initialState: UserState = {
  newUser: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
};

// ne pas modifier
export async function registerUser(newUser) {
  const signUpQuery = `
    mutation Mutation {
      signUp(signUpInput: {
          email : ${newUser.email},
          password: ${newUser.password},
          confirmPassword: ${newUser.confirmPassword},
          firstname: ${newUser.firstName},
          lastname: ${newUser.lastName}
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
    console.log(result);
  });
}
// a renommer
export const createNewUser = createAction<object>('register/create-new-user');

// a renommer
const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(createNewUser, (state, action) => {
    state.newUser = action.payload;
  });
});

// ca fait coucou à la bdd si l'utilisateur existe // token // refresh token // mdp est bon

// Reducer pour le login
// Définir les actions du reducer pour le login
const actionTypes = {
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_ERROR: 'SET_ERROR',
};

// Définir le state initial du reducer pour le login
function userReducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_EMAIL:
      return { ...state, email: action.payload };
    case actionTypes.SET_PASSWORD:
      return { ...state, password: action.payload };
    case actionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      throw new Error();
  }
}

// Exporter le reducer pour le login
export function useUserReducer() {
  const [state, dispatch] = useReducer(userReducer, {
    email: '',
    password: '',
    error: '',
  });
  return [state, dispatch];
}

export default userReducer;
