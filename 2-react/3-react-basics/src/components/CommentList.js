

import React, { Component } from 'react';

// import store from '../store'
import { connect, withCard } from '../hoc'

class CommentList extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         comments: store.getState().comments['java']
    //     }
    // }
    // componentDidMount() {
    //     store.subscribe(() => {
    //         let comments = store.getState().comments;
    //         this.setState({ comments })
    //     })
    // }
    // componentWillUnmount() {
    //     // unsubscribe
    // }

    // commonLogic() {
    //     //..    
    // }
    renderComments() {
        let { comments } = this.props;
        return comments.map((comment, idx) => {
            return <li key={idx} className="list-group-item">{comment}</li>
        })
    }
    render() {
        return (
            // <div className="card">
            //     <div className="card-header">All comments - 'java'</div>
            //     <div className="card-body bg-warning">
            <ul>
                {this.renderComments()}
            </ul>
            //     </div>
            // </div>
        );
    }
}

// export default CommentList;
function mapStateToProps(state) {
    return {
        comments: state.comments['javascript']
    }
}
export default withCard(connect(CommentList, mapStateToProps), "All comments")