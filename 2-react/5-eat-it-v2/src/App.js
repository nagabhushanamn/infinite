import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Item from './components/Item';
import CartBadge from './components/CartBadge';
import CartView from './components/CartView';


class App extends React.Component {
  state = {
    cart: {}, // Map
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

  addToCart(e) {
    let { item } = e;
    let { id } = item;
    let { cart } = this.state;
    /*
      cart={
        itemId:{item,qty}
      }
    */
    let itemLine = cart[id];
    if (itemLine) {
      itemLine = { ...itemLine, qty: itemLine.qty + 1 }
    }
    else {
      itemLine = { item, qty: 1 }
    }
    cart = { ...cart, [id]: itemLine }
    this.setState({ cart })
  }

  renderItems() {
    let { items, cart } = this.state;
    return items.map((item, idx) => {
      let itemLine = cart[item.id] || {};
      let qty = itemLine.qty || 0;
      return (
        <div key={idx} className="list-group-item">
          <Item cartQty={qty} value={item} onBuy={e => this.addToCart(e)} />
        </div>
      )
    })
  }
  render() {
    let { cart } = this.state;
    return (
      <div>
        <Navbar title="eat-IT" />
        <hr />
        <CartBadge value={Object.keys(cart).length} />
        <hr />
        <div className="container">
          <CartView value={cart} />
          <hr />
          {this.renderItems()}
        </div>

      </div>
    )
  }
}

export default App;
