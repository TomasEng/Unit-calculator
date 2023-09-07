import React from 'react';
import {LanguagePicker} from 'tomas-react-tools';
import {useTranslation} from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  return (
    <LanguagePicker
      languages={['nb', 'en']}
      selected={i18n.language}
      onChange={(language) => i18n.changeLanguage(language.toString())}
    />
  );
};