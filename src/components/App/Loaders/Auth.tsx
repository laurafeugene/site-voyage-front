import Cookies from 'js-cookie';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

// Fonction pour décoder le token via JWT Decode
function decodeToken(token) {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Fonction pour rediriger vers la page de connexion
function redirectToLogin() {
  redirect('/connexion');
}

// Fonction pour charger le token
function getToken() {
  const accessToken = Cookies.get('accessToken');

  if (accessToken) {
    // Décoder le token avec JWT Decode
    const decodedToken = decodeToken(accessToken);
    if (decodedToken) {
      axios.defaults.headers.common.Authorization = `${accessToken}`;
      return accessToken;
    }
    // Si le token est invalide ou n'a pas pu être décodé
    redirectToLogin();
  }

  return null;
}

// Composant TokenLoader
export default function TokenLoader() {
  return getToken();
}

// Fonction pour charger l'authentification
export function authLoader() {
  const token = getToken();
  if (!token) {
    redirectToLogin();
  }
  return null;
}
