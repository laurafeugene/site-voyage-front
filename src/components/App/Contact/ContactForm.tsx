import React from 'react';

function ContactForm() {
  const [formStatus, setFormStatus] = React.useState('Send');
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    const conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="flex flex-col justify-self-center m-8 max-w-full	">
      <h2 className="mt-6 pb-6 text-center text-2xl font-bold leading-9 tracking-tight text-darkest">
        Envie de nous écrire ?
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col justify-center">
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Nom
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Sujet
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
