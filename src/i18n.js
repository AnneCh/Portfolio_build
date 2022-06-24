import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageDetectorModule } from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';



i18n
    .use(LanguageDetectorModule)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en', 
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