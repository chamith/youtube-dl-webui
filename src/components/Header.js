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
  }

  handleSubmit = (event) => {
    this.props.onAdd(this.state);
    this.setState({ isModalOpen: false })
  }

  handleInputChange = (event) => {
    console.log(`handling the onChange event of ${event.target.name} changing to ${event.target.value}`);
    this.setState({ 
      [event.target.name]: event.target.value 
    });
  }

  render() {
    Modal.setAppElement('#root');
    const { url } = this.state;
    return (
      <header className="App-header">
        <div>
          <Modal isOpen={this.state.isModalOpen}>
            <h2>New Download Request</h2>
            <div>URL</div>
              <input type='text' name='url' value={url} onChange={this.handleInputChange} />
              <div>
                <button onClick={this.handleSubmit}>Submit</button>
                <button onClick={() => this.setState({ isModalOpen: false })}>Cancel</button>
              </div>
          </Modal>
        </div>
        <div className="divTable">
          <div className="divTableRow">
            <div className="divTableCell"><button onClick={() => this.setState({ isModalOpen: true })} >+</button></div>
            <div className="divTableCell"></div>
          </div>
        </div>
      </header>
    )
  }
}
