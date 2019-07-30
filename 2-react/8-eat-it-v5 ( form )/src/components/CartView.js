

import React, { Component } from 'react';

class CartView extends Component {
    renderCartItems(cart) {
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
                    <td>{qty}</td>
                    <td>&#8377;{item.price * qty}</td>
                </tr>
            )
        })
    }
    render() {
        let { value: cart } = this.props
        return (
            <div className="card">
                <div className="card-header">Item(s) in cart</div>
                <div className="card-body">
                    <table className="table table-sm table-bordered">
                        <tbody>
                            {this.renderCartItems(cart)}
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

export default CartView;