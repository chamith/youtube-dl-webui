import React, { Component } from 'react'
import ItemList from './ItemList';
import Modal from 'react-modal';
export default class Request extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false
    }
  }

  render() {
    const request = this.props.request
    return (
      <div key={request.id}>
        <div className="divTableRow">
          <div className="divTableCell">{request.url}</div>
          <div className="divTableCell">{request.avgPrg}</div>
          <div className="divTableCell"><button value={request.id} onClick={(event) => this.setState({isModalOpen:true})}>delete</button></div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">
            <ItemList items={request.items} />
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen}>
          <h2>Confirm Deletion</h2>
          <div>Are you sure to delete the request '{request.url}'</div>
          <div>
            <button onClick={() => this.props.onDelete(request.id)}>Submit</button>
            <button onClick={() => this.setState({ isModalOpen: false })}>Cancel</button>
          </div>
        </Modal>
      </div>
    )
  }
}
