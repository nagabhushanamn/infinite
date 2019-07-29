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
  renderBuyBtn(item) {
    if (item.canBuy) return <button className="btn btn-sm btn-dark">buy</button>
    else return null;
  }
  renderItems() {
    let { items } = this.state;
    return items.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 com-sm-3 col-md-3">
              <img src={item.imgPath} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-9 com-sm-9 col-md-9">
              <h5>{item.name}</h5>
              <h6>&#8377;{item.price}.00</h6>
              <div>{item.description}</div>
              {this.renderBuyBtn(item)}
            </div>
          </div>
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
