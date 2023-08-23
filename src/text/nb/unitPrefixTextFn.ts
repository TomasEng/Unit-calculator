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
  deca: 'deka',
  deci: 'desi',
  centi: 'centi',
  milli: 'milli',
  micro: 'mikro',
  nano: 'nano',
  pico: 'piko',
  femto: 'femto',
  atto: 'atto',
  zepto: 'zepto',
  yocto: 'yocto',
  ronto: 'ronto',
  quecto: 'quecto',
};

export const unitPrefixTextFn = (prefix: Prefix): string =>
  prefix === null ? '' : unitPrefixTexts[prefix];