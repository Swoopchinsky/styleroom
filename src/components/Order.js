import React, { Component } from 'react'
import { IoCloseOutline } from "react-icons/io5";


export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.img} alt="style" />
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price} $ </b>
                <IoCloseOutline className='delete' onClick={() => this.props.onDelete(this.props.item.id)} />

            </div>
        )
    }
}

export default Order