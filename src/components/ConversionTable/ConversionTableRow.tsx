import React from 'react';
import {Measure} from 'enheter';
import {ConversionTableProps} from './ConversionTable';
import {TableCell, TableRow} from '@digdir/design-system-react';
import {useLanguage} from '../../hooks/useLanguage';
import {unitTextFn} from '../../text/unitTextFn';

export interface ConversionTableRowProps {
  measure: Measure;
}

export const ConversionTableRow = ({measure}: ConversionTableProps) => {
  const language = useLanguage();
  return (
    <TableRow>
      <TableCell>{unitTextFn(language)(measure.unit, true)}</TableCell>
      <TableCell>{measure.unit.symbol}</TableCell>
      <TableCell>{measure.value}</TableCell>
    </TableRow>
  )
}