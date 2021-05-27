import React, { Component } from 'react';
import { Card, Col, Alert } from 'react-bootstrap';
import WeatherDay from './WeatherDay';

export class Weather extends Component {
  render() {
    return (
      <>
        {this.props.error ? (
          <Col sm="12" lg="12">
            <Alert style={{ margin: '20px 0 20px 0' }} variant="danger">
              {this.props.errorValue}
            </Alert>
          </Col>
        ) : typeof this.props.weatherData === 'string' ? (
          <Col sm="12" lg="12">
            <Alert style={{ margin: '20px 0 20px 0' }} variant="danger">
              {this.props.weatherData}
            </Alert>
          </Col>
        ) : (
          <>
            {this.props.weatherData.map((item, index) => (
              <Col sm="6" lg="4" key={index}>
                <Card style={{ margin: '20px 0 20px 0' }}>
                  <WeatherDay item={item} />
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
