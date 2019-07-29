

import React, { Component } from 'react';
import { connect, withCard } from '../hoc'

// import store from '../store'

class TopicList extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         topics: store.getState().topics
    //     }
    // }
    // componentDidMount() {
    //     store.subscribe(() => {
    //         let topics = store.getState().topics;
    //         this.setState({ topics })
    //     })
    // }
    // componentWillUnmount() {
    //     // unsubscribe
    // }

    // commonLogic() {
    //     //..    
    // }
    renderTopics() {
        // let { topics } = this.state;
        let { topics } = this.props;
        return topics.map((topic, idx) => {
            return <li key={idx} className="list-group-item">{topic}</li>
        })
    }
    render() {
        return (
            // <div className="card">
            //     <div className="card-header">All Topics</div>
            //     <div className="card-body">
            <ul>
                {this.renderTopics()}
            </ul>
            // </div>
            // </div>
        );
    }
}

// export default TopicList;

function mapStateToProps(state) {
    return {
        topics: state.topics
    }
}

export default withCard(connect(TopicList, mapStateToProps), "All Topics")