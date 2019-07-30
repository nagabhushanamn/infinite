import React, { Component } from 'react';
import Item from './Item';
class ItemList extends Component {
    state = {
        items: [
            {
                id: 1,
                name: 'Veg',
                price: 100.00,
                canBuy: true,
                imgPath: 'images/veg.png',
                description: 'veg is always yummy & healthy'
            },
            {
                id: 2,
                name: 'Non-Veg',
                price: 90.00,
                canBuy: true,
                imgPath: 'images/non-veg.png',
                description: 'non-veg is  yummy but not healthy'
            }
        ]
    }

    renderItems() {
        let { items } = this.state;
        let { cart } = this.props;
        return items.map((item, idx) => {
            let itemLine = cart[item.id] || {};
            let qty = itemLine.qty || 0;
            return (
                <div key={idx} className="list-group-item">
                    <Item cartQty={qty} value={item} onBuy={e => this.props.onBuy(e)} />
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default ItemList;