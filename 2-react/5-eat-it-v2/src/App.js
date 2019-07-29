import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Item from './components/Item';
import CartBadge from './components/CartBadge';
import CartView from './components/CartView';


class App extends React.Component {
  state = {
    cart: [],
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
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart })
  }

  renderItems() {
    let { items } = this.state;
    return items.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <Item value={item} onBuy={e => this.addToCart(e)} />
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
        <CartBadge value={cart.length} />
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
