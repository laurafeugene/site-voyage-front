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

// Fonction pour vérifier la date d'expiration du refresh token
function isRefreshTokenValid(refreshToken) {
  const decodedTokenRefresh = decodeToken(refreshToken);
  if (decodedTokenRefresh) {
    const currentTime = Math.floor(Date.now() / 1000); // convertir en secondes
    const expirationTime = decodedTokenRefresh.exp;
    const fifteenDaysInSeconds = 15 * 24 * 60 * 60; // 15 jours en secondes
    return (
      expirationTime >= currentTime &&
      expirationTime - currentTime <= fifteenDaysInSeconds
    );
  }
  return false;
}

// Fonction pour charger le token
function getToken() {
  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');

  if (accessToken) {
    // Décoder le token avec JWT Decode
    const decodedToken = decodeToken(accessToken);
    if (decodedToken) {
      axios.defaults.headers.common.Authorization = `${accessToken}`;
      return accessToken;
    }
    // Si le token est invalide ou n'a pas pu être décodé
    redirectToLogin();
    return null; // Null pour indiquer qu'aucun token n'a été trouvé
  }
  // Pour checker si le refresh token est toujours valide
  if (refreshToken) {
    if (isRefreshTokenValid(refreshToken)) {
      // Effectuer les actions nécessaires avec le refresh token
      axios.defaults.headers.common.Authorization = `${refreshToken}`;
      return refreshToken;
    }
    // Si le refresh token est expiré ou invalide
    redirectToLogin();
    return null; // Null pour indiquer qu'aucun token n'a été trouvé
  }

  return null; // Null pour indiquer qu'aucun token n'a été trouvé
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
