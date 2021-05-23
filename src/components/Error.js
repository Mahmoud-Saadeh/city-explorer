import React, { Component } from 'react'

export class Error extends Component {
    render() {
        return (
            
            <p>{this.props.errorValue ? `${this.props.errorValue}. Couldn't find this location` :'Please explore any location'}</p>
            
        )
    }
}

export default Error
