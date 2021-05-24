import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';

export class Weather extends Component {
  render() {
    return (
      <>
        {this.props.error ? (
          <Col sm="12" lg="12">
            <Card style={{ margin: '20px 0 20px 0' }}>
              <Card.Body>{this.props.errorValue}</Card.Body>
            </Card>
          </Col>
        ) : typeof this.props.weatherData === 'string' ? (
          <Col sm="12" lg="12">
            <Card style={{ margin: '20px 0 20px 0' }}>
              <Card.Body>{this.props.weatherData}</Card.Body>
            </Card>
          </Col>
        ) : (
          <>
            {this.props.weatherData.map((item, index) => (
              <Col sm="6" lg="4" key={index}>
                <Card style={{ margin: '20px 0 20px 0' }}>
                  <Card.Body>
                    <Card.Text>{item.date}</Card.Text>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </>
        )}
      </>
    );
  }
}

export default Weather;
