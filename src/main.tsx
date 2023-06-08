import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import App from './components/App/App';
import FAQ from './components/App/FAQ/FAQ';
import Home from './components/App/Home/Home';
import Connection from './components/App/Connection/connection';
import Register from './components/App/Register/register';

import './styles/main.css'

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="CGU" element={<h1>CGU</h1>} />
          <Route path="connection" element={<Connection/>} />
          <Route path="register" element={<Register />} />
        </Route>
      )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />
);