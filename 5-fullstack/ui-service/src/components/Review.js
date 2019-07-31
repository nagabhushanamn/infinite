import React, { Component } from 'react';

class Review extends Component {
    renderStars(n) {
        let arr = [];
        for (let i = 0; i < n; i++)
            arr.push(<i key={i} style={{ color: 'red' }} className="fa fa-star"></i>)
        return arr;
    }
    render() {
        let { value: review } = this.props;
        return (
            <div className="alert alert-danger">
                <span>{this.renderStars(review.stars)}</span> &mdash;  <span>{review.author?review.author:'Anonymous'}</span>
                <hr />
                <div>{review.body}</div>
            </div>
        );
    }
}

export default Review;