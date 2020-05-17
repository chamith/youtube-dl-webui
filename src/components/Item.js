import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const item = this.props.item
    return (
      <div className="divTableRow">
        <div className="divTableCell">{item.title}</div>
        <div className="divTableCell">{item.status}</div>
        <div className="divTableCell">{item.progress}</div>
      </div>
    )
  }
}
