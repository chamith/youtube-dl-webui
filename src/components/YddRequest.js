import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ClearIcon from '@material-ui/icons/Clear';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';
import YddItemList from './YddItemList'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default class YddRequest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      isRowOpen: false
    }

  }

  statusIcon = () => {

    const status = this.props.request.status;

    if (status > 0 && status < 3)
      return <AutorenewIcon />;
    else if (status === 0)
      return <HourglassEmptyIcon />;
    else if (status === 3)
      return <DoneIcon />;
    else
      return <ErrorIcon />;
  }

  progressText = () => {
    const status = this.props.request.status;
    const progress = this.props.request.progress;

    return status > 0 && status < 3 ? (` [${progress.toFixed(2)}%]`) : '';
  }


  render() {
    const request = this.props.request
    const classes = theme => ({
      root: {
        '& > *': {
          borderBottom: 'unset',
        },
      },
    })
    return (

      <>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => this.setState({ isRowOpen: !this.state.isRowOpen })}>
              {this.state.isRowOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>{this.statusIcon()}</TableCell>
          <TableCell component="th" scope="row">{this.progressText()} {request.url}</TableCell>
          <TableCell align="right">
            {/* <button onClick={(event) => this.setState({ isModalOpen: true })}><img alt='delete icon' width='24px' src={process.env.PUBLIC_URL + '/delete.png'} /></button> */}
            <IconButton onClick={(event) => this.setState({ isModalOpen: true })}><ClearIcon /></IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={this.state.isRowOpen} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <YddItemList items={request.items} />
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
        <Dialog
          open={this.state.isModalOpen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure to delete the request <b>'{request.url}'</b>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.onDelete(request.id)} color="primary" autoFocus> Yes </Button>
            <Button onClick={() => this.setState({ isModalOpen: false })} color="primary" >No</Button>
          </DialogActions>
        </Dialog>

      </>
    )
  }
}
