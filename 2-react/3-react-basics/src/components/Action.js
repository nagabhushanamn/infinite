import React, { Component } from 'react';
import './Action.css'

class Action extends Component {
    state = {
        count: 0
    }
    increment() {
        let { count } = this.state;
        count += 1;
        this.setState({ count })
        let { onKick, value } = this.props;
        if (onKick)
            onKick({ v: count * value })
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        let className = `btn ${value > 0 ? 'btn-info' : 'btn-warning'}`
        return (
            <div className="action">
                <div className="card card-body">
                    <button onClick={e => this.increment()} className={className}>{value}</button>
                    <hr />
                    <span className="badge badge-dark">{count}</span>
                </div>
            </div>
        );
    }
}

export default Action;