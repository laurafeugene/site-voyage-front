import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Account from './components/App/Profil/Account';
import App from './components/App/App';
import Cgu from './components/App/Infos/Cgu';
import ContactForm from './components/App/Infos/ContactForm';
import DayByDay from './components/App/ByDay/LayoutActivityByDay';
import GeneralTravel from './components/App/GeneralTravel/GeneralTravel';
import Home from './components/App/Layouts/Main/Home';
import NotFound from './components/App/NotFound/NotFound';
import PasswordResetForm from './components/App/Login/ForgetPassword';
import TravelsHistory from './components/App/TravelsHistory/TravelsHistory';
import SignUp from './components/App/Login/SignUp';

// Redux
import store from './store';

import './styles/main.css';
// Importation de la fonction getToken (auth) pour les routes protégées
import tokenLoader, { authLoader } from './components/App/Loaders/Auth';
import SignIn from './components/App/Login/SignIn';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<NotFound />}
      id="root"
      loader={tokenLoader}
    >
      <Route errorElement={<NotFound />}>
        <Route index element={<Home />} />
        <Route
          path="voyages"
          element={<TravelsHistory />}
          loader={authLoader}
        />
        <Route path="voyages/:voyage" element={<GeneralTravel />} />
        <Route
          path="voyages/:voyage/jour/:jour"
          element={<DayByDay />}
          loader={authLoader}
        />
        <Route path="cgu" element={<Cgu />} />
        <Route path="infos" element={<h1>Infos</h1>} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="mot-de-passe-oublie" element={<PasswordResetForm />} />
        <Route path="mon-compte" element={<Account />} loader={authLoader} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
