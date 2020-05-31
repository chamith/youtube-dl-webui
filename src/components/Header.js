import React, { Component } from 'react'
import Modal from 'react-modal';
import {IconButton, Checkbox} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      url: '',
      schedule: 0
    }
  }

  handleSubmit = (event) => {
    this.props.onAdd(this.state);
    this.setState({ isModalOpen: false })
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = name === 'schedule' ? !target.checked : target.value;

    console.log(`handling the onChange event of ${name} changing to ${value}`);
    this.setState({
      [name]: value
    });
  }

  render() {
    Modal.setAppElement('#root');
    const { url, schedule } = this.state;
    return (
      <header className="App-header">
        <div className="divTable">
          <div className="divTableRow">
            <div className="divTableCell"><IconButton onClick={() => this.setState({ isModalOpen: true })}  variant="contained"><AddIcon/></IconButton></div>
          </div>
        </div>
        <Dialog open={this.state.isModalOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Download Request</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="URL"
            type="url"
            name="url"
            fullWidth
            value={url}
            onChange={this.handleInputChange}
          />
          <FormControlLabel label="Download during off peak hours" control={<Checkbox id="schedule" name="schedule" checked={!schedule} onChange={this.handleInputChange} />}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} variant="outlined" color="primary" autoFocus>
            Submit
          </Button>
          <Button onClick={() => this.setState({ isModalOpen: false })}  variant="outlined" color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      </header>
    )
  }
}
