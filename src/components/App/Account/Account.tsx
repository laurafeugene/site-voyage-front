import { useState, useEffect } from 'react';
import {
  AccountProps,
  getAccount,
  updateAccount,
} from '../../../store/reducers/account';

function Account(props: AccountProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [messageContent, setMessageContent] = useState('');
  // const [avatar, setAvatar] = useState('');

  const [emailPlaceholder, setEmailPlaceholder] = useState('');
  const [firstNamePlaceholder, setFirstNamePlaceholder] = useState('');
  const [lastNamePlaceholder, setLastNamePlaceholder] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  /*  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAvatar(event.target.value);
  }; */

  useEffect(() => {
    getAccount().then((data) => {
      setEmailPlaceholder(data.data.me.email);
      setFirstNamePlaceholder(data.data.me.firstname);
      setLastNamePlaceholder(data.data.me.lastname);
    });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === confirmPassword) {
      const changesAccount = {
        email,
        password,
        firstName,
        lastName,
        /* avatar, */
      };

      try {
        const response = await updateAccount(changesAccount);
        if (response.errors) {
          // If error : display an error message
          setMessageContent(response.errors[0].message);
        } else {
          // If account created :
          setMessageContent(
            `${response.data.updateAccount.firstname}, vos changements on été pris en compte !`
          );
          setEmailPlaceholder(response.data.updateAccount.email);
          setFirstNamePlaceholder(response.data.updateAccount.firstname);
          setLastNamePlaceholder(response.data.updateAccount.lastname);

          // Form cleaning
          setEmail('');
          setPassword('');
          setFirstName('');
          setLastName('');
          /* setAvatar(''); */
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setMessageContent('Les mots de passe ne correspondent pas');
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen pt-2 font-mono my-16">
      <div className="container mx-auto">
        <div className="inputs w-full max-w-2xl p-6 mx-auto">
          <div className="bg-darkest rounded-box">
            <h2 className="text-2xl text-lightest m-4 p-4 my-8">
              Votre compte
            </h2>
          </div>

          {/* image de profil */}
          <div className="flex sm:flex-wrap justify-center">
            <div className="avatar mx-5">
              <div className="w-24 rounded-full">
                <img src="../../../src/assets/chat.png" />
              </div>
            </div>

            {/* <div>
              <input type="file" className="file-input w-full max-w-xs my-6 mx-8 bg-lightest text-drakest" />
            </div> */}
          </div>

          {/* formulaire de changements */}
          <p>{messageContent}</p>
          <form className="mt-6  pt-4" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="flex items-center justify-between mt-4">
                <div className="w-full md:w-1/2 px-3 mb-6">
                  <label
                    htmlFor="grid-text-3"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Prénom
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                    id="grid-text-3"
                    type="text"
                    placeholder={firstNamePlaceholder}
                    defaultValue={props.firstName}
                    onChange={handleFirstNameChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                  <label
                    htmlFor="grid-text-4"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Nom
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                    id="grid-text-4"
                    type="text"
                    placeholder={lastNamePlaceholder}
                    defaultValue={props.lastName}
                    onChange={handleLastNameChange}
                  />
                </div>
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <label
                  htmlFor="grid-text-1"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Adresse mail
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                  id="grid-text-1"
                  type="text"
                  placeholder={emailPlaceholder}
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="personal w-full  pt-4" />

              <div className="w-full md:w-full px-3 mb-6">
                <label
                  htmlFor="grid-text-2"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Mot de passe
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                  id="grid-text-2"
                  type="password"
                  placeholder="Entrer votre nouveau mot de passe"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="w-full md:w-full px-3 mb-6">
                <label
                  htmlFor="grid-text-2"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Confirmer Mot de passe
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                  id="grid-text-2"
                  type="password"
                  placeholder="Confirmer le mot de passe"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>

              {/* <div className="w-full md:w-full px-3 mb-6 ">
                <button
                  type="submit"
                  className="appearance-none bg-lightest text-darkest px-2 py-1 shadow-sm border border-gray-400 rounded-md"
                >
                  Changer votre mot de passe
                </button>
              </div> */}

              <div className="personal w-full pt-4">
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="appearance-none bg-lightest text-darkest px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                  >
                    Enregistrer vos changements
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
