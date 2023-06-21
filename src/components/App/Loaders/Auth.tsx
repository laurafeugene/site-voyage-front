import { stores, setIsLogged } from '../../../store/reducers/user';
import { useAppDispatch } from '../../../hooks/redux';

function getToken() {
  const loggedIn = stores.getState().userReducer.isLogged;
  const dispatch = useAppDispatch();
  dispatch(setIsLogged(true));

  console.log(loggedIn);
  return null;
}
export default getToken;
