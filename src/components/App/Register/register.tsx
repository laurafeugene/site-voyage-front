/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { createNewUser } from '../../../store/reducers/register';

type SignUpProps = {};

function SignUp(props: SignUpProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorContent, setErrorContent] = useState('');
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsErrorOpen(false);
    console.log(
      `First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`
    );
    
    // check if password and confirm password are the same
    if (password === confirmPassword) {
      // envoie à mon reducer les infos récupérées dans le formulaire
      dispatch(createNewUser(firstName));
  
        // Si le compte est bien créé :
        // form cleaning
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
  
        // Si erreur :
        // affiche message d'erreur
      }
      else {
        setErrorContent('Les mots de passe doivent être identiques');
        setIsErrorOpen(true);
      }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-6 pb-6 text-center text-2xl font-bold leading-9 tracking-tight text-darkest">
          Se créer un compte{' '}
        </h1>
        {isErrorOpen && <p className="pb-6 text-warm">{errorContent}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label
              className="block text-darkest-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Prénom
            </label>
            <input
              id="name"
              type="text"
              placeholder="Prénom"
              autoComplete="name"
              required
              value={firstName}
              onChange={handleFirstNameChange}
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-darkest-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-darkest-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Nom
            </label>
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-darkest-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Nom de famille"
              autoComplete="lastName"
              required
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-darkest-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-darkest-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-darkest-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-darkest-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-darkest-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirmation mot de passe
            </label>
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-darkest-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirmation mot de passe"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {password !== confirmPassword && (
              <p className="text-warm text-xs italic">
                Mots de passe différents !
              </p>
            )}
          </div>
          <div className="flex flex-col items-center justify-between">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-darkest px-3 py-1.5 text-sm font-semibold leading-6 text-lightest shadow-sm"
              // disabled={
              //   password !== confirmPassword ||
              //   !name ||
              //   !lastName ||
              //   !email ||
              //   !password
              // }
            >
              Créer un compte
            </button>
            <NavLink
              to="/connexion"
              className="block justify-center m px-3 py-1.5 text-sm font-semibold leading-6 text-darkest"
            >
              Déjà un compte ?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
