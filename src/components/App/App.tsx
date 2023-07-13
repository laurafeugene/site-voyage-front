import { Outlet, useRouteLoaderData } from 'react-router';
import { useEffect } from 'react';
import Footnote from './Footnote/Footnote';
import { useAppDispatch } from '../../hooks/redux';
import { setIsLogged } from '../../store/reducers/user';
import DefaultNavbar from './NavBar/NavBar';

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
      <main>
        <Outlet />{' '}
        {/* permet de faire le rendu des composants enfants de la route */}
      </main>
      <Footnote />
    </>
  );
}

export default App;
