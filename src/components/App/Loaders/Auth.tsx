import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import { redirect } from 'react-router';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { refreshToken, setIsLoggedTrue } from '../../../store/reducers/user';

// Doublon avec le function dans le header -- Ahmed
function getToken() {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.user.isLogged);
  useEffect(() => {
    if (!isLogged) {
      const accessToken = Cookies.get('accessToken');
      const refreshToken = Cookies.get('refreshToken');
      if (accessToken) {
        const decodedToken = jwtDecode(accessToken);
        const currentTime = Math.floor(Date.now() / 1000);
        if (decodedToken.exp >= currentTime) {
          // Redirection vers la page de connexion
          redirect('/connexion');
          // Appel à dispatch pour renouveler le token
          dispatch(refreshToken(refreshToken));
          // Appel à dispatch pour définir isLogged à true
          dispatch(setIsLoggedTrue());
        }
      }
    }
  }, [dispatch, isLogged]);
  return null;
}
export default getToken;
