import {allUnits, findDimensionName, Measure,} from 'enheter';

export const conversionList = (measure: Measure): Measure[] => {
  const dimensionName = findDimensionName(measure.unit.dimension);
  if (dimensionName) {
    const {units} = allUnits[dimensionName];
    if (units) {
      return Object.values(units).map(u => measure.copy().convertTo(u));
    }
  }
  return [];
};