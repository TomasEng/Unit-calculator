import {unitTextFnNb} from './nb/unitTextFn';
import {unitTextFnEn} from './en/unitTextFn';

export const unitTextFn = (language: 'nb' | 'en') => {
  switch (language) {
    case 'nb': return unitTextFnNb;
    case 'en': return unitTextFnEn;
  }
}