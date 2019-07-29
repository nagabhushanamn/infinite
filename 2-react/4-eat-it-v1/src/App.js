import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        name: 'Veg',
        price: 100.00,
        canBuy: true,
        description: 'veg is always yummy & healthy'
      },
      {
        id: 2,
        name: 'Non-Veg',
        price: 90.00,
        canBuy: true,
        description: 'veg is always yummy & not healthy'
      }
    ]
  }
  renderBuyBtn(item) {
    if (item.canBuy) return <button className="btn btn-sm btn-dark">buy</button>
    else return null;
  }
  renderItems() {
    let { items } = this.state;
    return items.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <h5>{item.name}</h5>
          <h6>&#8377;{item.price}.00</h6>
          <div>{item.description}</div>
          {this.renderBuyBtn(item)}
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">eat-IT</a>
        </nav>
        <hr />
        <hr />

        <div className="container">
          {this.renderItems()}
        </div>

      </div>
    )
  }
}

export default App;
