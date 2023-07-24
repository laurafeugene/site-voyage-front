import { NavLink, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { loginUser } from '../../store/reducers/user';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Utilisation de useAppDispatch pour envoyer les données de connexion à l'API
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Utilisation de dispatch pour envoyer les données de connexion à l'API
    await dispatch(loginUser(email, password)).then((data) => {
      if (data) {
        navigate('/travels');
      }
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <svg
              className="w-auto h-6 sm:h-7"
              xmlns="http://www.w3.org/2000/svg"
              height="200"
              viewBox="0 -960 960 960"
              width="200"
              fill="#20b970"
            >
              <path d="M253-135q-97 0-166.5-67.816Q17-270.631 17-367.491 17-448 73.52-501.5q56.52-53.5 137.5-53.5 80.98 0 137.48 48.5Q405-458 405-380h71q-3-95-78-171t-204-76q36-87 117.5-143t169.103-56q117.06 0 198.729 84Q761-658 770-543v24q80 12 126.5 64.182Q943-402.635 943-327.235 943-247 887-191q-56 56-136 56H253Z" />
            </svg>
          </div>

          <div className="flex items-center justify-center mt-6">
            <a
              href="/signin"
              className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-orange dark:border-green-400 dark:text-white"
            >
              Se connecter
            </a>

            <a
              href="/signup"
              className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
            >
              Se créer un compte
            </a>
          </div>

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ffcea8"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email"
              id="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ffcea8"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Mot de passe"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green rounded-lg hover:bg-green-200 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50"
            >
              Se connecter
            </button>

            <div className="mt-6 text-center ">
              <a
                href="/signup"
                className="text-sm text-green hover:underline font-semibold dark:text-green-400"
              >
                Pas encore de compte ?
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
