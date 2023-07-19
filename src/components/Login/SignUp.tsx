import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { registerUser } from '../../store/reducers/user';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // Message de succès lorsqu'un compte est créé
  const [isNotSucess, setisNotSucess] = useState(false); // Message d'erreur lorsqu'un compte n'est pas créé

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTimeout(() => {
      // setTimeout permet de déclencher une fonction après un certain temps
      setIsSuccess(true);
      setisNotSucess(true);
    }, 2000); // 2 secondes

    // Check if password and confirm password are the same
    if (password === confirmPassword) {
      const newUser = {
        email,
        firstName,
        lastName,
        password,
        confirmPassword,
      };

      try {
        const response = await registerUser(newUser);
        if (response.errors) {
          // If error : display an error message
          setMessageContent(response.errors[0].message);
        } else {
          // If account created : display a success message
          setMessageContent(
            `${response.data.signUp.user.firstname}, votre compte a bien été créé !`
          );

          // Form cleaning
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        }
      } catch (error) {
        setMessageContent(error.response.data.errors[0].message);
      }
    }

    // If password and confirm password are differents
    else {
      // Display an error message
      setMessageContent('Les mots de passe doivent être identiques');
    }
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
              className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
            >
              Se connecter
            </a>

            <NavLink
              to="/signup"
              className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-orange dark:border-green-400 dark:text-white"
            >
              Se créer un compte
            </NavLink>
          </div>
          {isSuccess ? (
            <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
              <div className="flex items-center justify-center w-12 bg-green">
                <svg
                  className="w-6 h-6 text-white fill-current"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                </svg>
              </div>

              <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                  <span className="font-semibold text-green dark:text-emerald-400">
                    Succès !
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    {messageContent}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
          {isNotSucess ? (
            <div className="flex w-full max-w-sm overflow-hidden mt-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <div className="flex items-center justify-center w-12 bg-orange">
                <svg
                  className="w-6 h-6 text-white fill-white"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                </svg>
              </div>

              <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                  <span className="font-semibold text-orange dark:text-yellow-300">
                    Attention !
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    {messageContent}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <input
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Prénom"
              id="name"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={handleFirstNameChange}
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Nom de famille"
              id="lastName"
              autoComplete="family-name"
              required
              value={lastName}
              onChange={handleLastNameChange}
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
              onChange={handleEmailChange}
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
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Mot de passe"
              id="password"
              value={password}
              onChange={handlePasswordChange}
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
              placeholder="Confirmation du mot de passe"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green rounded-lg hover:bg-green-200 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50"
            >
              Créer un compte
            </button>

            <div className="mt-6 text-center ">
              <NavLink
                to="/login"
                className="text-sm text-green hover:underline font-semibold dark:text-green-400"
              >
                Déjà un compte ?
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
