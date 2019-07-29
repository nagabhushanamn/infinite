import React from 'react';
import PropTypes from 'prop-types'
import Greeting from './components/Greeting'

class App extends React.Component {
  // state = {}
  constructor(props) {
    super(props)
    //console.log(props)
    this.state = {
      message: 'greetings'
    }
    console.log("App :: constructor()")
  }
  changeMesage(message) {
    // this.state.message = message; // this will not make any effect,reac never mutate state like this 
    this.setState({ message }) // trigger diffing on V-DOM
  }
  render() {
    console.log("App :: render()")
    let { title, trainer } = this.props; // de-structuring
    let { message } = this.state;
    // this.props.title = "new-title" // illegal, becoz by default all props are immutable
    return (
      <div className="container">
        <hr />
        <h1>{title} : by - &nbsp;
          <span className="badge badge-dark">{trainer}</span>
        </h1>
        <hr />
        <button onClick={e => this.changeMesage('good morning')} className="btn btn-sm btn-dark">GM</button>&nbsp;
        <button onClick={e => this.changeMesage('good noon')} className="btn btn-sm btn-dark">GN</button>&nbsp;
        <button onClick={e => this.changeMesage('good evening')} className="btn btn-sm btn-dark">GE</button>&nbsp;
        <hr />
        <Greeting message={message} />

      </div>
    )
  }
}

App.defaultProps = {
  trainer: 'Unknown'
}
App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}

export default App;

