import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "Shopping Website": "Shopping Website",
      "Inspirational designs, illustrations, and graphic elements from the world's best designers.": "Inspirational designs, illustrations, and graphic elements from the world's best designers."
      // Add other translations
    }
  },
//   fr: {
//     translation: {
//       "Welcome to React": "Bienvenue à React et react-i18next",
//       "Shopping Website": "Site de shopping",
//       "Inspirational designs, illustrations, and graphic elements from the world's best designers.": "Des designs inspirants, des illustrations et des éléments graphiques des meilleurs designers du monde."
//       // Add other translations
//     }
//   },
  ar: {
    translation: {
      "Welcome to React": "مرحبًا بكم في React و react-i18next",
      "Shopping Website": "موقع تسوق",
      "Inspirational designs, illustrations, and graphic elements from the world's best designers.": "تصاميم ملهمة ورسوم توضيحية وعناصر رسومية من أفضل المصممين في العالم."
      // Add other translations
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
