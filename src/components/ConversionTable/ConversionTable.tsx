import React from 'react';
import {Measure} from 'enheter';
import {Table, TableBody, TableCell, TableHeader, TableRow} from '@digdir/design-system-react';
import {conversionList} from '../../utils/measureUtils';
import {ConversionTableRow} from './ConversionTableRow';
import {useTranslation} from 'react-i18next';

export interface ConversionTableProps {
  measure: Measure;
}

export const ConversionTable = ({ measure }: ConversionTableProps) => {
  const { t } = useTranslation();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>
            {t('unit')}
          </TableCell>
          <TableCell>
            {t('symbol')}
          </TableCell>
          <TableCell>
            {t('value')}
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {conversionList(measure).map(measure => (
          <ConversionTableRow
            measure={measure}
            key={measure.unit.key}
          />
        ))}
      </TableBody>
    </Table>
  )
};