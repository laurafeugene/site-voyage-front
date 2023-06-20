import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { loginUser } from '../../../store/reducers/user';

function ConnectionForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Utilisation de useAppDispatch pour envoyer les données de connexion à l'API
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Utilisation de dispatch pour envoyer les données de connexion à l'API
    await dispatch(loginUser(email, password));
    navigate('/voyages');
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-darkest">
            Connectez-vous à votre compte !
          </h2>
        </div>

        {/* {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Erreur !</strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )} */}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Adresse mail :
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mot de passe :
                </label>
                <div className="text-sm">
                  <NavLink
                    to="/mot-de-passe-oublie"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Mot de passe oublié ?
                  </NavLink>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!email || !password}
                className="flex w-full justify-center rounded-md bg-darkest px-3 py-1.5 text-sm font-semibold leading-6 text-lightest shadow-sm "
              >
                Se connecter
              </button>
            </div>
          </form>

          <NavLink
            to="/inscription"
            className="mt-10 text-center text-sm text-gray-500"
          >
            Pas de compte ?
          </NavLink>
        </div>
      </div>
      <div />
    </div>
  );
}

export default ConnectionForm;
