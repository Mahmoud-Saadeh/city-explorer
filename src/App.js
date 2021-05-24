import React, { Component } from 'react';
import FormLocation from './components/FormLocation';
import Location from './components/Location';
import Weather from './components/Weather';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      error: false,
      errorValue: '',
      allWeatherData: {},
    };
  }
  getFormData = (formData, error, errorValue, allWeatherData) => {
    this.setState({
      formData,
      error,
      errorValue,
      allWeatherData,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm="12" lg="6">
              <FormLocation getFormData={this.getFormData} />
            </Col>
            <Col sm="12" lg="6">
              <Location
                formData={this.state.formData}
                errorValue={this.state.errorValue}
                error={this.state.error}
              />
            </Col>
          </Row>
          {!this.state.error && this.state.allWeatherData.data && (
            <Row>
              <Weather
                weatherData={this.state.allWeatherData.data}
                error={this.state.allWeatherData.error}
                errorValue={this.state.allWeatherData.errorValue}
              />
            </Row>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
