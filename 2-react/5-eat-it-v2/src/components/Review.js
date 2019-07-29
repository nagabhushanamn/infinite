import React, { Component } from 'react';

class Review extends Component {
    renderStars(n) {
        let arr = [];
        for (let i = 0; i < n; i++)
            arr.push(<i style={{ color: 'red' }} className="fa fa-star"></i>)
        return arr;
    }
    render() {
        let { value: review } = this.props;
        return (
            <div class="alert alert-danger">
                <span>{this.renderStars(review.stars)}</span> &mdash;  <span>{review.author}</span>
                <hr />
                <div>{review.body}</div>
            </div>
        );
    }
}

export default Review;