import React, {Component} from 'react'

export default class Hoc extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
};