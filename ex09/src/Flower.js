import React, {Component} from 'react';

class Flower extends Component {
    render () {
        return (
            <h2>This is a {this.props.color} flower</h2>
        )
 
    }
}

export default Flower;