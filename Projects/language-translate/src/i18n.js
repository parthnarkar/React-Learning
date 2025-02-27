import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
          "Hello Everyone": "Hello Everyone", // Correct key
        },
      },
      hi: {
        translation: {
          "Hello Everyone": "सभी को नमस्कार", // Correct key
        },
      },
      ma: {
        translation: {
            "Hello Everyone": "सर्वांना नमस्कार"
        },
      }
    },
    lng: "ma", // Default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
  
  export default i18n;
