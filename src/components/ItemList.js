import React, { Component } from 'react'
import Item from './Item'
export default class ItemList extends Component {
    render() {
        return (
            <div className="divTable" style={{borderStyle:'none'}}>
                {/* <div className="divTableHeading">
                    <div className="divTableHead" style={{width:32}}>Status</div>
                    <div className="divTableHead">Title</div>
                    <div className="divTableHead">Progress</div>
                </div> */}
                <div className="divTableBody">
                    {this.props.items.map(item => (
                        <Item key={item.id} item={item} />))}
                </div>
            </div>
        )
    }
}
