import React from 'react';
import {Measure} from 'enheter';
import {ConversionTableProps} from './ConversionTable';
import {TableCell, TableRow} from '@digdir/design-system-react';

export interface ConversionTableRowProps {
  measure: Measure;
}

export const ConversionTableRow = ({measure}: ConversionTableProps) => {
  return (
    <TableRow>
      <TableCell>{measure.unit.key}</TableCell>
      <TableCell>{measure.unit.symbol}</TableCell>
      <TableCell>{measure.value}</TableCell>
    </TableRow>
  )
}