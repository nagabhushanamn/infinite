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
            <div ref="greetDiv">
                <div className="alert alert-warning">
                    <p>{message}</p>
                    <hr />
                    <p>{new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/kolkata' })}</p>
                </div>
            </div>
        );
    }
    componentDidMount() {
        console.log("Greeting :: componentDidMount()")
        this.refs.greetDiv.addEventListener('mouseover', e => {
            this.refs.greetDiv.style.cursor = 'pointer'
        })
        this.interval = setInterval(() => {
            this.forceUpdate();
        }, 1000);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Greeting :: shouldComponentUpdate()")
        return this.props.message !== nextProps.message
    }
    componentDidUpdate() {
        console.log("Greeting :: componentDidUpdate()")
    }
    componentWillUnmount() {
        clearInterval(this.interval)
        console.log("Greeting :: componentWillUnmount()")
    }


}

export default Greeting;