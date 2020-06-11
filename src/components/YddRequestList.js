import React from 'react'
import YddRequest from './YddRequest';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';

import Paper from '@material-ui/core/Paper';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

export default function YddRequestList(props) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={5}>Download Queue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.requests.map((request) => (
            <YddRequest key={request.id} request={request} onDelete={(requestId) => props.onDelete(requestId)} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
