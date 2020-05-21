import React, { Component } from 'react'
import ItemList from './ItemList';
import Modal from 'react-modal';
// import Collapsible from 'react-collapsible'

export default class Request extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      isItemListOpen: false
    }

  }

  statusText = () => {

    const status = this.props.request.status;

    if (status > 0 && status < 3)
      return 'downloading';
    else if (status === 0)
      return 'pending';
    else if (status === 3)
      return 'done';
    else
      return 'error';
  }

  progressText = () => {
    const status = this.props.request.status;
    const progress = this.props.request.progress;

    return status > 0 && status < 3 ? (` [${progress.toFixed(2)}%]`) : '';
  }

  render() {
    const request = this.props.request

    return (
      <>
        <div className="divTableRow" onClick={() => { this.setState({ isItemListOpen: !this.state.isItemListOpen }) }}>
          <div className={`divTableCell`}><img width='24px' src={`${process.env.PUBLIC_URL}/${this.statusText()}.png`} alt="status icon" />{this.progressText()} {request.url}</div>
          <div className={`divTableCell`}><button onClick={(event) => this.setState({ isModalOpen: true })}><img alt='delete icon' width='24px' src={process.env.PUBLIC_URL + '/delete.png'} /></button>
            <Modal isOpen={this.state.isModalOpen} style={{ overlay: { backgroundColor: 'grey' }, content: { border: 1, width: '40%', height: '20%', left: '30%', top: '40%' } }} >
              <h2>Confirm Deletion</h2>
              <div>Are you sure to delete the request <b>'{request.url}'</b></div>
              <div>&nbsp;</div>
              <div>
                <button onClick={() => this.props.onDelete(request.id)}>Submit</button>&nbsp;
            <button onClick={() => this.setState({ isModalOpen: false })}>Cancel</button>
              </div>
            </Modal>
          </div>
        </div>
        {/* <Collapsible className="itemList" open={this.state.isItemListOpen} > */}
        <ItemList items={request.items} />
        {/* </Collapsible> */}
      </>
    )
  }
}
