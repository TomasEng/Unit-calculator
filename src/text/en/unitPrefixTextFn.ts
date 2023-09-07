import {Prefix} from 'enheter';

const unitPrefixTexts: {
  [prefix: Exclude<Prefix, null>]: string;
} = {
  quetta: 'quetta',
  ronna: 'ronna',
  yotta: 'yotta',
  zetta: 'zetta',
  exa: 'exa',
  peta: 'peta',
  tera: 'tera',
  giga: 'giga',
  mega: 'mega',
  kilo: 'kilo',
  hecto: 'hecto',
  deca: 'deca',
  deci: 'deci',
  centi: 'centi',
  milli: 'milli',
  micro: 'micro',
  nano: 'nano',
  pico: 'pico',
  femto: 'femto',
  atto: 'atto',
  zepto: 'zepto',
  yocto: 'yocto',
  ronto: 'ronto',
  quecto: 'quecto',
};

export const unitPrefixTextFnEn = (prefix: Prefix): string =>
  prefix === null ? '' : unitPrefixTexts[prefix];