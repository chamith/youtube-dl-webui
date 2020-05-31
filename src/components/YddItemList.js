import React, { Component } from 'react'
import YddItem from './YddItem'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export default class YddItemList extends Component {
    render() {
        return (
            <Table size="small" aria-label="purchases" style={{margin:'0px 0px 0px 75px', width:'75%'}}>
                <TableHead>
                    <TableRow>
                        <TableCell  style={{width:'40px'}}>Status</TableCell>
                        <TableCell>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.items.map((item) => (
                        <YddItem item={item}/>
                    ))}
                </TableBody>
            </Table>

        )
    }
}
