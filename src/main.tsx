import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';
import './styles/main.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/App/Home/Home';

// je crée un Router
const router = createBrowserRouter([
  {
    path: '/', // quand l'URL correspond à `/`…
    element: <App />, // …j'affiche l'élément `<h1>HW!</h1>`
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />
);
