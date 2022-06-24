import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector"



i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        debug: true,
        fallbackLng: 'en', 
        detection: {
            order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie'],
            // those lines determine where i18n will go get the language preference from (order)
            // and where to store the user's preference (caches)
        },
        resources:{
            en:{
                translation: {
// translations
                }
            },
            fr: {
                translation:{
// translations
                }
            }
        }
    })

    export default i18n; 