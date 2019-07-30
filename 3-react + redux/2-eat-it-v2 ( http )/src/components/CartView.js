

import React, { Component } from 'react';

import { connect } from 'react-redux'
import { buy } from '../actions/cart'

class CartView extends Component {
    renderCartItems(cart, buy) {
        this.total = 0;
        let keys = Object.keys(cart);
        return keys.map((key, idx) => {
            let itemLine = cart[key];
            let { item, qty } = itemLine;
            this.total = this.total + (item.price * qty)
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td><i onClick={e => buy(item, 1)} className="fa fa-plus"></i></td>
                    <td>{qty}</td>
                    <td><i onClick={e => buy(item, -1)} className="fa fa-minus"></i></td>
                    <td>&#8377;{item.price * qty}</td>
                </tr>
            )
        })
    }
    render() {
        let { cart, buy } = this.props
        if (Object.keys(cart).length === 0)
            return <div>cart is empty</div>
        else
            return (
                <div className="card">
                    <div className="card-header">Item(s) in cart</div>
                    <div className="card-body">
                        <table className="table table-sm table-bordered">
                            <tbody>
                                {this.renderCartItems(cart, buy)}
                            </tbody>
                        </table>
                        <hr />
                        Total : &#8377;{this.total}
                        <hr />
                        <button className="btn btn-dark">checkout</button>
                    </div>
                </div>
            );
    }
}


const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = { buy }

export default connect(mapStateToProps, mapDispatchToProps)(CartView);