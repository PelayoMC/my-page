import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { esp_translation } from "./es";
import { en_translation } from "./en";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      es: esp_translation,
      en: en_translation,
    },
    lng: "es", // if you're using a language detector, do not define the lng option
    fallbackLng: "es",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
