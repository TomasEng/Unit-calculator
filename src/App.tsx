import React, {useState} from 'react';
import classes from './App.module.css';
import {Measure, Unit, allUnits, DimensionName, findDimensionName} from 'enheter';
import {UnitList} from 'enheter/lib/types/UnitList';
import {
  Select,
  SingleSelectOption,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow, TextField,
} from '@digdir/design-system-react';
import '@altinn/figma-design-tokens/dist/tokens.css';

const unitToOption = (unit: Unit): SingleSelectOption => {
  const dimensionName = findDimensionName(unit.dimension);
  const label = `${unit.key} (${dimensionName})`;
  const value = `${dimensionName}.${unit.key}`;
  return {
    label,
    value,
    keywords: [unit.key!!, unit.symbol!!],
  };
}

function App() {
  const [value, setValue] = useState<number>(1);
  const [unit, setUnit] = useState<string>('length.metre');

  const currentUnitKey = unit.split('.')[1];
  const currentDimensionName = unit.split('.')[0] as DimensionName;
  const currentUnitList: UnitList = allUnits[currentDimensionName];
  const currentUnit: Unit = currentUnitList.units[currentUnitKey]!!;
  const currentMeasure = new Measure(currentUnit, value);

  return (
    <div className={classes.app}>
      <div className={classes.page}>
        <header>
          <h1>Unit converter</h1>
        </header>
        <div className={classes.converterForm}>
          <div className={classes.value}>
            <TextField
              formatting={{
                align: 'right',
                number: {
                  decimalSeparator: ',',
                }
              }}
              onChange={event => setValue(Number(event.target.value))}
              value={value.toString()}
            />
          </div>
          <div className={classes.unit}>
            <Select
              options={Object.values(allUnits).map(d => Object.values(d.units)).flat().map(unitToOption)}
              value={unit}
              onChange={setUnit}
            />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>
                Unit
              </TableCell>
              <TableCell>
                Symbol
              </TableCell>
              <TableCell>
                Value
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.values(currentUnitList.units).map((unit) => {
              const convertedValue = currentMeasure.convertTo(unit);
              return (
                <TableRow key={unit.key}>
                  <TableCell>
                    {unit.key}
                  </TableCell>
                  <TableCell>
                    {unit.symbol}
                  </TableCell>
                  <TableCell>
                    {convertedValue.value}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

  export default App;
