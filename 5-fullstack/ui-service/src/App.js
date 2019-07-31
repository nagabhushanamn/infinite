import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CartBadge from './components/CartBadge';
import CartView from './components/CartView';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ItemList from './components/ItemList';
import NotFound from './components/NotFound';

import { connect } from 'react-redux';
import { loadCart } from './actions/cart'

class App extends React.Component {
  componentDidMount() {
    this.props.loadCart();
  }
  render() {
    return (
      <div>
        <Navbar title="eat-IT" />
        <hr />
        <CartBadge />
        <hr />

        <Router>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/">home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items">items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">sign-in</Link>
              </li>
            </ul>
            <hr />
            <div className="container">
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/items" render={() => <ItemList />} />
                <Route path="/cart" render={() => <CartView />} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>

      </div>
    )
  }
}

const mapDispathToProps = { loadCart }
export default connect(null, mapDispathToProps)(App);
