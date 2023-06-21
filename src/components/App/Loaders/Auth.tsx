import { stores } from '../../../store/reducers/user';

function getToken() {
  const loggedIn = stores.getState().userReducer.isLogged;
  console.log(loggedIn);
  return null;
}
export default getToken;
