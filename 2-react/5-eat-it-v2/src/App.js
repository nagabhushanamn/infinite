import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Item from './components/Item';


class App extends React.Component {
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
    return items.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <Item value={item} />
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <Navbar title="eat-IT" />
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
