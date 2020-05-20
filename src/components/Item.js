import React, { Component } from 'react'

export default class Item extends Component {

  statusText = () => {
    const status = this.props.item.status;

    switch (status) {
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
    return status > 0 && status < 3 ? (` [${progress.toFixed(2)}%]`) : '';
  }

  render() {
    const item = this.props.item
    return (
      <div key={item.id}>
        <span style={{width:20}}>&nbsp;&nbsp;</span><img width='24px' src={`${process.env.PUBLIC_URL}/${this.statusText()}.png`} alt="status icon" />{this.progressText()} {item.title}
      </div>
    )
  }
} 
