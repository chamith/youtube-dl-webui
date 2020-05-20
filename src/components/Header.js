import React, { Component } from 'react'
import Modal from 'react-modal';

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      url: '',
      schedule: 0
    }
    //this.handleInputChange = this.handleInputChange.bind(this);
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
        <div>
          <Modal isOpen={this.state.isModalOpen} style={{ overlay: { backgroundColor: 'grey' }, content: { border: 1, width: '40%', height: '20%', left: '30%', top: '40%' } }}>
            <h2>New Download Request</h2>
            <div>URL: <input type='text' name='url' value={url} onChange={this.handleInputChange} style={{ width: '92%' }} /></div>
            <div>&nbsp;</div>
            <div><input name='schedule' type='checkbox' checked={!schedule} onChange={this.handleInputChange}/>Download during off peak hours</div>
            <div>&nbsp;</div>
            <div>
              <button onClick={this.handleSubmit}>Submit</button>&nbsp;
              <button onClick={() => this.setState({ isModalOpen: false })}>Cancel</button>
            </div>
          </Modal>
        </div>
        <div className="divTable">
          <div className="divTableRow">
            <div className="divTableCell"><button onClick={() => this.setState({ isModalOpen: true })}  variant="contained" color="primary"><img alt='add icon' width='24px' src={process.env.PUBLIC_URL + '/add.png'}/></button></div>
          </div>
        </div>
      </header>
    )
  }
}
