import React from 'react';
import PropTypes from 'prop-types'
import TopicList from './components/TopicList';
import CommentList from './components/CommentList';
// import Greeting from './components/Greeting'
// import ActionBox from './components/ActionBox'
// import A from './components/A'
// import MealBox from './components/MealBox'
// import Veg from './components/Veg'
// import NonVeg from './components/NonVeg'

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
    // let { message } = this.state;
    // this.props.title = "new-title" // illegal, becoz by default all props are immutable
    return (
      <div className="container">
        <hr />
        <h1>{title} : by - &nbsp;
          <span className="badge badge-dark">{trainer}</span>
        </h1>
        <hr />

        {/*-----------------------------------------------------------------------------------------------------------*/}
        {/* 
        <button onClick={e => this.changeMesage('good morning')} className="btn btn-sm btn-dark">GM</button>&nbsp;
        <button onClick={e => this.changeMesage('good noon')} className="btn btn-sm btn-dark">GN</button>&nbsp;
        <button onClick={e => this.changeMesage('good evening')} className="btn btn-sm btn-dark">GE</button>&nbsp;
        <button onClick={e => this.changeMesage('')} className="btn btn-sm btn-danger">Remove</button>&nbsp;
        <hr />
        {message ? <Greeting message={message} /> : null} 
        */}
        {/*-----------------------------------------------------------------------------------------------------------*/}

        {/* <ActionBox /> */}

        {/*-----------------------------------------------------------------------------------------------------------*/}

        {/* 
        <A color="red" />
        <A color="green" />
        <A color="blue" /> 
        */}

        {/*-----------------------------------------------------------------------------------------------------------*/}

        {/* 
        <MealBox>
          <Veg />
          <Veg />
          <Veg />
        </MealBox>
        <br />
        <MealBox>
          <NonVeg />
          <NonVeg />
        </MealBox>

        <MealBox>
          <Veg />
          <NonVeg />
        </MealBox> 
        */}

        {/*-----------------------------------------------------------------------------------------------------------*/}

        <div className="row">
          <div className="col-sm-6 col-md-6">
            <TopicList />
          </div>
          <div className="col-sm-6 col-md-6">
            <CommentList />
          </div>
        </div>


      </div>
    )
  }

  componentDidMount() {
    console.log("App :: componentDidMount()")
    // setTimeout(() => {
    //   let response = "hello react!, hope r rocking"
    //   this.setState({ message: response })
    // }, 3000)
  }
  componentDidUpdate() {
    console.log("App :: componentDidUpdate‰()")
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

