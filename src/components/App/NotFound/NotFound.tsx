import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-lightest mb-36">
      <h1 className="text-5xl pb-2">404</h1>
      <p className="pb-8 text-xl">
        Désolé, une erreur inattendue est survenue.
      </p>
      <NavLink
        to="/"
        className="text-warm-400 hover:text-warm bg-darkest rounded-lg p-4 text-lg"
      >
        Revenir à l'accueil
      </NavLink>
    </main>
  );
}

export default NotFound;
