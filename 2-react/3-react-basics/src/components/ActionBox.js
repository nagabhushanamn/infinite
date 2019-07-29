import React, { Component } from 'react';
import Action from './Action'
import Summary from './Summary'

class ActionBox extends Component {
    state = {
        totalCount: 0
    }
    incrementTotalCount(e) {
        let { totalCount } = this.state;
        totalCount += e.v;
        this.setState({ totalCount })
    }
    renderActions() {
        let numbers = [10, -20, 30, -40, 50, 60]
        return numbers.map((number, idx) => {
            return <Action key={idx} value={number} onKick={event => this.incrementTotalCount(event)} />
        })
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card">
                <div className="card-header">ActioBox : <span className="badge badge-dark">{totalCount}</span></div>
                <div className="card-body">
                    {/* 
                    <Action value={10} onAction={e => this.incrementTotalCount(e)} />
                    <Action value={-10} onAction={e => this.incrementTotalCount(e)} /> 
                    */}
                    {this.renderActions()}
                    <div style={{ clear: 'both' }}>
                        <hr />
                        <Summary value={totalCount} />
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionBox;