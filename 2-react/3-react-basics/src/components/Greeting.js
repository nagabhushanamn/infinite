import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props) {
        super(props);
        console.log("Greeting :: constructor()")
    }
    render() {
        console.log("Greeting :: render()")
        let { message } = this.props;
        return (
            <div>
                <div className="alert alert-warning">
                    <p>{message}</p>
                    <hr />
                    <p>{new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/kolkata' })}</p>
                </div>
            </div>
        );
    }
}

export default Greeting;