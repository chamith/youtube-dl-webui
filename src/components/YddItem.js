import React, { Component } from 'react'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';
import PauseIcon from '@material-ui/icons/Pause';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default class YddItem extends Component {

  statusIcon = () => {
    const status = this.props.item.status;

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

  progressText = () => {
    const status = this.props.item.status;
    const progress = this.props.item.progress;
    return status > 0 && status < 3 ? (` [${progress.toFixed(2)}%]`) : '';
  }

  render() {
    const item = this.props.item
    return (
      <TableRow key={item.id}>
        <TableCell component="th" scope="row">
          {this.statusIcon()}
        </TableCell>
        <TableCell> {this.progressText()} {item.title}</TableCell>
      </TableRow>)
  }
} 
