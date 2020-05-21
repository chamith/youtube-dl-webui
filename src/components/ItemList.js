import React, { Component } from 'react'
import Item from './Item'
export default class ItemList extends Component {
    render() {
        return (
                 <div className="itemList">
                    {this.props.items.map(item => (
                        <Item key={item.id} item={item} />))}
                </div>
        )
    }
}
