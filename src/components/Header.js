import React, { Component } from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import Config from '../Config';

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      url: '',
      schedule: 0
    }
  }

  baseUrl = new Config().getApiHost();

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log('Final Data:', data);
    axios.post(this.baseUrl + '/api/requests', data)
      .then(res => {
        console.log('submitted')
      })
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
          <button onClick={() => this.setState({ isModalOpen: true })}>+</button>
          <Modal isOpen={this.state.isModalOpen}>
            <h2>New Download Request</h2>
            <div>URL</div>
            <form>
              <input type='text' name='url' value={url} onChange={this.handleInputChange} />
              <div>
                <button onClick={this.handleSubmit}>Submit</button>
                <button onClick={() => this.setState({ isModalOpen: false })}>Cancel</button>
              </div>
            </form>
          </Modal>
        </div>
        <a id="add" className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Add</a>
      </header>
    )
  }
}
