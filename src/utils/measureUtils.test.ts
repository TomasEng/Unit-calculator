import {allUnits, length} from 'enheter';
import {conversionList} from './measureUtils';

describe('measureUtils', () => {
  describe('conversionList', () => {
    it('Returns a list of converted measures', () => {
      const measure = length('metre', 1);
      const result = conversionList(measure);
      expect(result).toHaveLength(Object.keys(allUnits['length'].units).length);
    });
  });
});