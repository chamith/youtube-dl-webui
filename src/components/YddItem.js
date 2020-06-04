import React from 'react'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';
import PauseIcon from '@material-ui/icons/Pause';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function YddItem(props) {
  const { id, title, status, progress } = props.item;

  const statusIcon = () => {
    switch (status) {
      case 0:
        return <HourglassEmptyIcon />;
      case 1:
        return <AutorenewIcon />;
      case 2:
        return <PauseIcon />;
      case 3:
        return <DoneIcon />;
      default:
        return <ErrorIcon />;
    }
  }

  const progressText = () => {
    return status > 0 && status < 3 ? (` [${progress.toFixed(2)}%]`) : '';
  }

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        {statusIcon()}
      </TableCell>
      <TableCell> {progressText()} {title}</TableCell>
    </TableRow>)
} 
