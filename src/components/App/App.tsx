import { Outlet, useRouteLoaderData } from 'react-router';
import { useEffect } from 'react';
import Footnote from './Footnote/Footnote';
import Header from './Header/Header';
import { useAppDispatch } from '../../hooks/redux';
import { setIsLogged } from '../../store/reducers/user';

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
      <Header />
      <main>
        <Outlet />{' '}
        {/* permet de faire le rendu des composants enfants de la route */}
      </main>
      <Footnote />
    </>
  );
}

export default App;
