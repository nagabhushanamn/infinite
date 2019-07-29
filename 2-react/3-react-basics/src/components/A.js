import React, { Component } from 'react';
import B from './B';
import ColorContext from './ColorContext'
import C from './C';

class A extends Component {
    render() {
        return (
            <div className="card card-body">
                <pre>
                    A Component  : {this.props.color}
                </pre>
                <ColorContext.Provider value={this.props.color}>
                    <B />
                    <C />
                </ColorContext.Provider>
            </div>
        );
    }
}

export default A;