
import i18n from 'i18next';
import Backend from 'i18next-http-backend';//public/locales/{lang}/translation.json
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
   fallbackLng:"nl",
   debug:true,
   interpolation:{
   escapeValue:false,
   backend: {
      loadPath: '/locales/{{lng}}/translation.json', 
    },
   },
  });
  
 export default i18n;
 
