import { Outlet, useRouteLoaderData } from 'react-router';
import { useEffect } from 'react';
import Footer from '../Layout/Footer';
import { useAppDispatch } from '../hooks/redux';
import { setIsLogged } from '../store/reducers/user';
import DefaultNavbar from '../Layout/NavBar';

function App() {
  const dispatch = useAppDispatch();
  // Pour savoir si l'utilisateur est connecté ou non
  const token = useRouteLoaderData('root') as string;

  useEffect(() => {
    if (token) {
      dispatch(setIsLogged(true));
    }
  }, [dispatch, token]);
  return (
    <>
      <DefaultNavbar />
      <Outlet />
      {/* permet de faire le rendu des composants enfants de la route */}
      <Footer />
    </>
  );
}

export default App;
