import { useState } from 'react';

function PasswordResetForm() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer une demande de réinitialisation du mot de passe avec l'e-mail saisi
    // Code pour appeler votre API ou votre service de réinitialisation de mot de passe
    console.log(
      `Envoyer une demande de réinitialisation du mot de passe pour l'e-mail : ${email}`
    );
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="w-auto">
        <form onSubmit={handleSubmit} className="justify-center">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-darkest">
            REINITIALISER VOTRE MOT DE PASSE
          </h2>
          <p className="mt-10 text-center text-sm tracking-tight pb-3 text-darkest ">
            Si vous avez oublié votre mot de passe, veuillez saisir votre
            adresse e-mail enregistrée. Nous vous enverrons un lien pour
            réinitialiser votre mot de passe.
          </p>
          <div>
            <input
              type="email"
              placeholder="L'adresse email ne peut pas être vide."
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="block w-full rounded-md border-0 text-center p-1.5 text-darkest-900 text-sm shadow-sm ring-1 ring-inset ring-darkest-300 placeholder:text-darkest-400 mb-3  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-darkest px-3 py-1.5 text-sm font-semibold leading-6 text-lightest  shadow-sm "
          >
            Réinitialiser le mot de passe
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordResetForm;
