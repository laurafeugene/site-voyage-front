import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Account from './Pages/Profil/Account';
import App from './components/App';
import Cgu from './Pages/Infos/Cgu';
import ContactForm from './Pages/Infos/ContactForm';
import DayByDay from './components/ByDay/LayoutActivityByDay';
import GeneralTravel from './components/GeneralTravel/GeneralTravel';
import Home from './Layout/Home';
import NotFound from './Pages/NotFound/NotFound';
import PasswordResetForm from './components/Login/ForgetPassword';
import TravelsHistory from './components/TravelsHistory/LayoutHistory';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';

// Redux
import store from './store';

import './styles/main.css';

// Importation de la fonction getToken (auth) pour les routes protégées
import tokenLoader, { authLoader } from './components/Loaders/Auth';

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
          path="travels"
          element={<TravelsHistory />}
          loader={authLoader}
        />
        <Route path="travels/:travel" element={<GeneralTravel />} />
        <Route
          path="travels/:travel/jour/:jour"
          element={<DayByDay />}
          loader={authLoader}
        />
        <Route path="cgu" element={<Cgu />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="mot-de-passe-oublie" element={<PasswordResetForm />} />
        <Route
          path="account"
          element={<Account email="" password="" firstName="" lastName="" />}
          loader={authLoader}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
