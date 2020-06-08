import React from 'react'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';
import PauseIcon from '@material-ui/icons/Pause';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function YddItem(props) {
  const { id, title, status, progress } = props.item;

  const StatusIcon = () => {
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

  const ProgressText = () => {
    return status > 0 && status < 3 ? (` [${progress.toFixed(2)}%]`) : '';
  }

  return (
    <TableRow key={id}>
      <TableCell style={{padding:'6px', width:'30px'}}>
        <StatusIcon/>
      </TableCell>
      <TableCell style={{padding:'6px', width:'30px'}}>
      <YouTubeIcon />
      </TableCell>      
      <TableCell  style={{padding:'6px'}}> <ProgressText/> {title}</TableCell>
    </TableRow>)
} 
