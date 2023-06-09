import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <h2>Mot de passe oublié</h2>
      <p>
        Veuillez saisir votre adresse e-mail pour réinitialiser votre mot de
        passe.
      </p>
      <div>
        <label htmlFor="email">Adresse e-mail :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <button type="submit">Réinitialiser le mot de passe</button>
    </form>
  );
}

export default PasswordResetForm;
