import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider }  from 'react-router-dom';
import Home from './Views/Home/Home.jsx';
import About from './Views/About/About.jsx';
import Contact from './Views/Contact/Contact';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './i18n/en.json';
import es from './i18n/es.json';
i18next.use(initReactI18next)
.init({
  lng: 'en',
  interpolation:{
    escapeValue: false
  },
  resources:{
    es: {
      translation: es
    },
    en: {
      translation: en
    }
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <h1>Error</h1>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
