import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { logOut } from '../store/reducers/user';

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  // Pour savoir si l'utilisateur est connecté ou non
  const isLogged = useAppSelector((state) => state.user.isLogged);

  // L'utilisateur souhaite se déconnecter
  const handleLogout = () => {
    dispatch(logOut());
  };

  let navigation = [{ name: 'Accueil', href: '/' }];
  if (isLogged) {
    navigation = [
      { name: 'Accueil', href: '/' },
      { name: 'Mes voyages', href: '/travels' },
      { name: 'Mon compte', href: `/account` },
    ];
  } else {
    navigation = [
      { name: 'Accueil', href: '/' },
      { name: 'Inscription', href: '/signup' },
      { name: 'Connexion', href: '/signin' },
    ];
  }

  return (
    <div x-data={{ isOpen }} className="relative dark:bg-gray-800 pb-5">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="/">
              <svg
                className="w-auto h-6 sm:h-7"
                xmlns="http://www.w3.org/2000/svg"
                height="100"
                viewBox="0 -960 960 960"
                width="100"
                fill="#20b970"
              >
                <path d="M253-135q-97 0-166.5-67.816Q17-270.631 17-367.491 17-448 73.52-501.5q56.52-53.5 137.5-53.5 80.98 0 137.48 48.5Q405-458 405-380h71q-3-95-78-171t-204-76q36-87 117.5-143t169.103-56q117.06 0 198.729 84Q761-658 770-543v24q80 12 126.5 64.182Q943-402.635 943-327.235 943-247 887-191q-56 56-136 56H253Z" />
              </svg>
            </a>

            {/* <!-- Mobile menu button --> */}
            <div className="flex lg:hidden">
              <button
                x-cloak="true"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  x-show="true"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                {/* // TODO : remettre la croix pour fermer le menu + ajout transition */}
                {/* <svg
                  x-show={isOpen}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg> */}
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            x-cloak="true"
            className={`${
              isOpen
                ? 'translate-x-0 opacity-100 '
                : 'opacity-0 -translate-x-full'
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              {navigation.map((category) => (
                <NavLink
                  key={category.name}
                  to={category.href}
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 font-medium transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-green dark:hover:bg-gray-700"
                >
                  {category.name}
                </NavLink>
              ))}
              {isLogged && (
                <NavLink
                  to="/signin"
                  onClick={handleLogout}
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 font-medium transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-green dark:hover:bg-gray-700"
                >
                  Se déconnecter
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
