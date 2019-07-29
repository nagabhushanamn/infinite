import React, { Component } from 'react';
// import Veg from './Veg'

class MealBox extends Component {
    renderChildren() {
        let children = this.props.children;
        return children.map((child, idx) => {
            return <li key={idx} className="list-group-item">{child}</li>
        })
    }
    render() {
        return (
            <div className="card card-body bg-info">
                <ul>
                    {/* 
                    <li className="list-group-item"><Veg /></li>
                    <li className="list-group-item"><Veg /></li>
                    <li className="list-group-item"><Veg /></li> 
                    */}
                    {this.renderChildren()}
                </ul>
            </div>
        );
    }
}

export default MealBox;