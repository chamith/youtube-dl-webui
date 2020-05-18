import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const item = this.props.item
    return (
        <div> - {item.status} [{item.progress}%] {item.title}</div>
    )
  }
}
