import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className=" dark:bg-gray-900 bg-gradient-to-br from-green-200 to-white">
      <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <NavLink to="/">
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
        </NavLink>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
          <NavLink
            to="/contact"
            className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-green dark:hover:text-green-400"
          >
            Nous Contacter
          </NavLink>
          <NavLink
            to="/faq"
            className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-green dark:hover:text-green-400"
          >
            FAQ
          </NavLink>
          <NavLink
            to="/cgu"
            className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-green dark:hover:text-green-400"
          >
            CGU
          </NavLink>
          <NavLink
            to="/infos"
            className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-green dark:hover:text-green-400"
          >
            Informations
          </NavLink>
        </div>

        <p className="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">
          © Copyright 2023 - Laura François-Eugene.{' '}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
