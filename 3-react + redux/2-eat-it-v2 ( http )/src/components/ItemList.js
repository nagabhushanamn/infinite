import React, { Component } from 'react';
import Item from './Item';

import { loadItems } from '../actions/items'
// import store from '../store'

import { connect } from 'react-redux'

class ItemList extends Component {
    // state = {
    //     items: []
    // }
    componentDidMount() {
        // this.unsubscribe = store.subscribe(() => {
        //     let items = store.getState().items;
        //     this.setState({ items })
        // })
        // let action = loadItems()
        // store.dispatch(action)
        // -or- 
        this.props.loadItems();
    }
    // componentWillUnmount() {
    //     this.unsubscribe();
    // }
    renderItems() {
        // let { items } = this.state;
        let { cart, items } = this.props;
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
    renderStatus() {
        let { nwStatus } = this.props;
        if (nwStatus.message)
            return (
                <div className="alert alert-warning">{nwStatus.message}</div>
            )
    }
    render() {
        return (
            <div>
                {this.renderStatus()}
                {this.renderItems()}
            </div>
        );
    }
}

// export default ItemList;

function mapStateToProps(state) {
    return {
        items: state.items,
        cart: state.cart,
        nwStatus: state.nwStatus
    }
}
const mapDispathToProps = { loadItems }

export default connect(mapStateToProps, mapDispathToProps)(ItemList)