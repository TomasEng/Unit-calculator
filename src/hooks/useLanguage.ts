import {useTranslation} from 'react-i18next';
import {Language} from '../types/Language';

export const useLanguage = (): Language => {
  const { i18n } = useTranslation();
  return i18n.language as Language;
}