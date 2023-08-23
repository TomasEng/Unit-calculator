import React, {useState} from 'react';
import classes from './App.module.css';
import {Measure, length} from 'enheter';
import '@altinn/figma-design-tokens/dist/tokens.css';
import {UnitInput} from 'tomas-react-tools';
import {prefixKeywords} from './data/prefixKeywords';
import {unitKeywords} from './data/unitKeywords';
import {unitPrefixTextFn} from './text/nb/unitPrefixTextFn';
import {unitTextFn} from './text/nb/unitTextFn';
import {ConversionTable} from './components/ConversionTable';


function App() {
  const [measure, setMeasure] = useState<Measure | undefined>(length('metre', 0));

  return (
    <div className={classes.app}>
      <div className={classes.page}>
        <header>
          <h1>Unit converter</h1>
        </header>
        <div className={classes.converterForm}>
          <div className={classes.unit}>
            <UnitInput
              prefixKeywords={prefixKeywords}
              unitKeywords={unitKeywords}
              unitPrefixTextFn={unitPrefixTextFn}
              unitTextFn={unitTextFn}
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
