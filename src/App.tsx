import React, {useState} from 'react';
import classes from './App.module.css';
import {Measure, length} from 'enheter';
import '@altinn/figma-design-tokens/dist/tokens.css';
import {UnitInput} from 'tomas-react-tools';
import {prefixKeywords} from './data/prefixKeywords';
import {unitKeywords} from './data/unitKeywords';
import {unitPrefixTextFn} from './text/unitPrefixTextFn';
import {unitTextFn} from './text/unitTextFn';
import {ConversionTable} from './components/ConversionTable';
import './text/i18next';
import {useTranslation} from 'react-i18next';
import {LanguageSelector} from './components/LanguageSelector';
import {useLanguage} from './hooks/useLanguage';


function App() {
  const [measure, setMeasure] = useState<Measure | undefined>(length('metre', 0));
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <div className={classes.app}>
      <div className={classes.page}>
        <header>
          <h1>{t('unit_calculator')}</h1>
          <LanguageSelector/>
        </header>
        <div className={classes.converterForm}>
          <div className={classes.unit}>
            <UnitInput
              prefixKeywords={prefixKeywords}
              unitKeywords={unitKeywords}
              unitPrefixTextFn={unitPrefixTextFn(language)}
              unitTextFn={unitTextFn(language)}
              onChange={setMeasure}
              value={measure}
            />
          </div>
        </div>
        {measure && <ConversionTable measure={measure}/>}
      </div>
    </div>
  );
}

export default App;
