import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {text as nb} from './nb/text';
import {text as en} from './en/text';

i18next.use(initReactI18next).init({
  resources: {
    nb: {translation: nb},
    en: {translation: en},
  },
  lng: 'nb',
});

export default i18next;