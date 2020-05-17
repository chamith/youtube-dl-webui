import React, { Component } from 'react'
import ItemList from './ItemList';
export default class Request extends Component {
  render() {
    const request = this.props.request
    return (
      <div key={request.id}>
        <div className="divTableRow">
          <div className="divTableCell">{request.url}</div>
          <div className="divTableCell">{request.avgPrg}</div>
          <div className="divTableCell"><a href="#area">details</a></div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">
              <ItemList items={request.items}/>
          </div>
        </div>
      </div>
    )
  }
}
