import React, { Component } from 'react';
import ColorContext from './ColorContext';
import D from './D';

class C extends Component {
    render() {
        return (
            <div className="card card-body">
                <pre>
                    C Component  :
                    <ColorContext.Consumer>
                        {value => value}
                    </ColorContext.Consumer>
                </pre>
                <D />
            </div>
        );
    }
}

export default C;