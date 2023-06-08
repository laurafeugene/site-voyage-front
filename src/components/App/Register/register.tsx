import { useState } from 'react';
import { NavLink } from 'react-router-dom';

type SignUpProps = {};

function SignUp(props: SignUpProps) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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
    console.log(
      `Name: ${name}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`
    );
  };

  return (
    <div className="mx-auto max-w-sm">
      <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-darkest">
        Se créer un compte{' '}
      </h1>
      <form onSubmit={handleSubmit} className=" px-8 pt-6 pb-8 mb-4">
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
            value={name}
            onChange={handleNameChange}
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
            <p className="text-red-500 text-xs italic">
              Mot de passe différent
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
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
            className="block w-full justify-center px-3 py-1.5 text-sm font-semibold leading-6 text-darkest"
          >
            Déjà un compte ?
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
