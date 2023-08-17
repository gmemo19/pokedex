import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("../translations/en.json"),
    },
    tr: {
      translation: require("../translations/tr.json"),
    },
  },
  lng: window.navigator.language || 'en', 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;