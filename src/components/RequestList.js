import React, { Component } from 'react'
import Request from './Request';

export default class RequestList extends Component {
  render() {
    return (
      <div className="divTable">
        <div className="divTableHeading">
          <div className="divTableHead">Download Queue</div>
          <div className="divTableHead">Actions</div>
        </div>
        <div className="divTableBody">
          {
            this.props.requests.map(request => (
              <Request key={request.id} request={request} onDelete={(requestId) => this.props.onDelete(requestId)} />
            ))
          }
        </div>
      </div>
    )
  }
}
