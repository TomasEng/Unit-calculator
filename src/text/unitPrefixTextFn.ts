import {unitPrefixTextFnNb} from './nb/unitPrefixTextFn';
import {unitPrefixTextFnEn} from './en/unitPrefixTextFn';

export const unitPrefixTextFn = (language: 'nb' | 'en') => {
  switch (language) {
    case 'nb': return unitPrefixTextFnNb;
    case 'en': return unitPrefixTextFnEn;
  }
}