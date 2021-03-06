import React, { Component } from 'react';

import { connect } from 'react-redux'

class CartBadge extends Component {
    render() {
        let { cart } = this.props;
        let count = Object.keys(cart).length;
        return (
            <div>
                <i className="fa fa-shopping-cart"></i>
                &nbsp;
                <span className="badge badge-danger">{count}</span>
                &nbsp;item(s) in cart
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CartBadge);

/**
 * 
 * <Connect(CartBadge)>
 *  <CartBadge cart={state.cart}/>
 * </Connect(CartBadge)>
 * 
 */