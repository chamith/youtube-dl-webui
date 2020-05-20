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
      <>
        <div key={request.id} className="divTableRow">
          <div className={`divTableCell url`}><div>{request.url}</div></div>
          <div className={`divTableCell progress`}>{request.avgPrg}</div>
          <div className={`divTableCell actions`}><button value={request.id} onClick={(event) => this.setState({ isModalOpen: true })}><img alt='delete icon' width='24px' src={process.env.PUBLIC_URL + '/delete.png'} /></button>
            <Modal isOpen={this.state.isModalOpen} style={{ overlay: { backgroundColor: 'grey' }, content: { border: 1, width: '40%', height: '20%', left: '30%', top: '40%' } }}>
              <h2>Confirm Deletion</h2>
              <div>Are you sure to delete the request '{request.url}'</div>
              <div>&nbsp;</div>
              <div>
                <button onClick={() => this.props.onDelete(request.id)}>Submit</button>&nbsp;
            <button onClick={() => this.setState({ isModalOpen: false })}>Cancel</button>
              </div>
            </Modal>
          </div>
        </div>
        <div className="divTableRow">
          <span className="divTableCell itemList"><ItemList items={request.items} /></span>
        </div>
      </>
    )
  }
}
