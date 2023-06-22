import Cookies from 'js-cookie';
import axios from 'axios';
import { redirect } from 'react-router-dom';

function getToken() {
  const accessToken = Cookies.get('accessToken');
  if (!accessToken) {
    // mettre la logique du token ici // faire pleins de petites fonctions
    return null;
  }
  axios.defaults.headers.common.Authorization = `${accessToken}`;
  return accessToken;
}

export default function TokenLoader() {
  return getToken();
}

export function authLoader() {
  const token = getToken();
  if (!token) {
    return redirect('/connexion');
  }
  return null;
}
