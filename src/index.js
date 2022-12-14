import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import en from './translation/en.json';
import vn from './translation/vn.json';
import 'semantic-ui-css/semantic.min.css';

i18next.use(LngDetector).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: localStorage.getItem('lan') || 'en', // language to use
  resources: {
    en: {
      translation: en
    },
    vn: {
      translation: vn
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
