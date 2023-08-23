import React from 'react';
import {Measure} from 'enheter';
import {Table, TableBody, TableCell, TableHeader, TableRow} from '@digdir/design-system-react';
import {conversionList} from '../../utils/measureUtils';
import {ConversionTableRow} from './ConversionTableRow';

export interface ConversionTableProps {
  measure: Measure;
}

export const ConversionTable = ({ measure }: ConversionTableProps) => (
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
      {conversionList(measure).map(measure => (
        <ConversionTableRow
          measure={measure}
          key={measure.unit.key}
        />
      ))}
    </TableBody>
  </Table>
);