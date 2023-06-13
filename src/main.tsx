import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App/App';
import FAQ from './components/App/FAQ/FAQ';
import Home from './components/App/Home/Home';
import Connection from './components/App/Connection/connection';
import Register from './components/App/Register/register';
import NotFound from './components/App/NotFound/NotFound';
import GeneralTravel from './components/App/GeneralTravel/GeneralTravel';
import Cgu from './components/App/Cgu/Cgu';
import PasswordResetForm from './components/App/ForgottenPassword/ForgottenPassword';
import ContactForm from './components/App/Contact/ContactForm';

// Redux
import store from './store';

import './styles/main.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<NotFound />}>
      <Route errorElement={<NotFound />}>
        <Route index element={<Home />} />
        <Route path="voyages" element={<h1>Mes Voyages</h1>} />
        <Route path="monvoyage" element={<GeneralTravel />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="cgu" element={<Cgu />} />
        <Route path="infos" element={<h1>Infos</h1>} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="connexion" element={<Connection />} />
        <Route path="inscription" element={<Register />} />
        <Route path="mot-de-passe-oublie" element={<PasswordResetForm />} />
      </Route>
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
