import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector"
import HttpApi from 'i18next-http-backend';


i18next
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(HttpApi) // allows grab of translation files instead of having all translations hardcoded here
    .init({
        supportedLngs: ['en', 'fr'],
        debug: true,
        fallbackLng: 'en', 
        react: { useSuspense: false },
        detection: {
            order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie'],
            // those lines determine where i18n will go get the language preference from (order)
            // and where to store the user's preference (caches)
            backend: {
                loadPath: '/locales/{{lng}}/translation.json',
            }
        },
    })



const rootElement = document.getElementById("root");
render(<App />, rootElement);

 ReactDOM.render(
 <React.StrictMode>
     <App />
</React.StrictMode>,
    document.getElementById('root')
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
