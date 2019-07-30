import React, { Component } from 'react';
import Review from './Review';

import axios from 'axios'
import ReviewForm from './ReviewForm_v2';

class Item extends Component {
    state = {
        currentTab: 1,
        reviews: []
    }
    changeTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let { value: item } = this.props;
                let { id } = item;
                let apiUrl = `http://localhost:8181/api/items/${id}/reviews`;
                axios
                    .get(apiUrl)
                    .then(response => {
                        let reviews = response.data || []
                        this.setState({ reviews })
                    })
            }
        })// async
    }
    submitNewReview(e) {
        let { v: review } = e;
        let { value: item } = this.props;
        let { id } = item;
        let apiUrl = `http://localhost:8181/api/items/${id}/reviews`;
        axios
            .post(apiUrl, review)
            .then(response => {
                let review = response.data;
                let { reviews } = this.state;
                reviews = reviews.concat(review)
                this.setState({ reviews })
            })
    }
    handleBuy(e) {
        let { value: item, onBuy } = this.props;
        if (onBuy)
            onBuy({ item })
    }
    renderBuyBtn(item) {
        if (item.canBuy) return <button onClick={e => this.handleBuy()} className="btn btn-sm btn-dark">buy</button>
        else return null;
    }
    renderReviews() {
        let { reviews } = this.state;
        if (reviews.length === 0)
            return (<div>-Nil-</div>)
        return reviews.map((review, idx) => {
            return <Review value={review} key={idx} />
        })
    }
    renderTabPanel(item) {
        let { currentTab } = this.state;
        switch (currentTab) {
            case 1: return (<div>{item.description}</div>)
            case 2: return (<div>{"Not Yet"}</div>)
            case 3: return (<div>{this.renderReviews()}<ReviewForm onSubmit={e => this.submitNewReview(e)} /></div>)
            default: return null;
        }
    }
    render() {
        let { value: item } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-3 com-sm-3 col-md-3">
                        <img src={item.imgPath} alt={item.name} className="img-fluid" />
                    </div>
                    <div className="col-9 com-sm-9 col-md-9">
                        <h5>{item.name}</h5>
                        <h6>&#8377;{item.price}.00</h6>
                        {this.renderBuyBtn(item)}
                        &nbsp;<span className="badge badge-danger">{this.props.cartQty}</span>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(e, 1)} className={`nav-link ${currentTab === 1 ? 'active' : ''}`} href="/">Description</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(e, 2)} className={`nav-link ${currentTab === 2 ? 'active' : ''}`} href="/">Ingre..</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(e, 3)} className={`nav-link ${currentTab === 3 ? 'active' : ''}`} href="/">Reviews</a>
                            </li>
                        </ul>
                        {this.renderTabPanel(item)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;