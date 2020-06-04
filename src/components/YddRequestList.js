import React from 'react'
import YddRequest from './YddRequest';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function YddRequestList (props) {

    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell style={{width:'40px'}}/>
              <TableCell style={{width:'40px'}}>Status</TableCell>
              <TableCell>URL</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.requests.map((request) => (
              <YddRequest key={request.id} request={request} onDelete={(requestId) => props.onDelete(requestId)}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
