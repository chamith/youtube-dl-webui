import React from 'react'
import YddItem from './YddItem'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

export default function YddItemList(props) {

    return (
        <Table size="small" aria-label="purchases" style={{ margin: '0px 0px 0px 75px', width: '95%' }}>
            <TableBody>
                {props.items.map((item) => (
                    <YddItem key={item.id} item={item} />
                ))}
            </TableBody>
        </Table>
    )
}
