import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export class Error extends Component {
  render() {
    return (
      <Alert style={{ margin: '20px 0 20px 0' }} variant="danger">
        {this.props.errorValue
          ? `${this.props.errorValue}. Couldn't find this location`
          : 'Please explore any location'}
      </Alert>
    );
  }
}

export default Error;
