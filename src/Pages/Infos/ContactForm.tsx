import { useState } from 'react';

type FormValues = {
  email: string;
  subject: string;
  message: string;
};

function ContactUs() {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    subject: '',
    message: '',
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission logic here
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="mt-6 pb-6 text-center text-2xl font-bold leading-9 tracking-tight text-darkest">
            Parlez-nous de votre voyage !
          </h1>
          <form onSubmit={handleFormSubmit}>
            <div className=" sm:rounded-md sm:overflow-hidden mb-4">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-darkest-700 text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      value={formValues.email}
                      onChange={handleFormChange}
                      className="shadow appearance-none border rounded-md w-full py-2 px-3 text-darkest-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="subject"
                      className="block text-darkest-700 text-sm font-bold mb-2"
                    >
                      Sujet
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formValues.subject}
                      onChange={handleFormChange}
                      className="shadow appearance-none border rounded-md w-full py-2 px-3 text-darkest-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="message"
                      className="block text-darkest-700 text-sm font-bold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formValues.message}
                      onChange={handleFormChange}
                      className="shadow appearance-none border rounded-md w-full py-2 px-3 text-darkest-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-darkest px-3 py-1.5 text-sm font-semibold leading-6 text-lightest"
                >
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <ContactUs />
    </div>
  );
}

export default App;
