import React, { Component } from 'react';

class Summary extends Component {
    render() {
        let { value } = this.props
        return (
            <div className="alert alert-warning">
                Total actions : <span className="badge badge-danger">{value}</span>
            </div>
        );
    }
}

export default Summary;