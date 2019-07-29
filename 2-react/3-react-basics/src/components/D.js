import React, { Component } from 'react';
import ColorContext from './ColorContext';

class D extends Component {
    render() {
        return (
            <div className=" card card-body">
                <pre>
                    D Component :
                    <ColorContext.Consumer>
                        {value => value}
                    </ColorContext.Consumer>
                </pre>

            </div>
        );
    }
}

export default D;