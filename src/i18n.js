import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

i18n
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
        // tells react where to load the translations from
      },
    },
  })

export default i18n
