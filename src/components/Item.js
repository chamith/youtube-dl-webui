import React, { Component } from 'react'

export default class Item extends Component {

  itemStatusDesc = (statusId) => {
    switch (statusId) {
      case 0:
        return 'pending';
      case 1:
        return 'downloading';
      case 2:
        return 'paused';
      case 3:
        return 'done';
      default:
        return 'error';
    }
  }

  progressText = () => {
    const status = this.props.item.status;
    const progress = this.props.item.progress;
    return status === 1 || status === 2 ? (`[${progress}%]`) : '';
  }
  render() {
    const item = this.props.item
    return (
      <div key={item.id} className="divTableRow">
        <img width='24px' src={`${process.env.PUBLIC_URL}/${this.itemStatusDesc(item.status)}.png`} alt="status icon" />&nbsp;{item.title}&nbsp;{this.progressText()}
      </div>
    )
  }
} 
