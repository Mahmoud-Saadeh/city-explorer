import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export class FormLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLocation: '',
      error: false,
      errorValue: '',
      weatherError: false,
      weatherErrorValue: '',
    };
  }
  locationInputHandler = (e) => {
    this.setState({
      inputLocation: e.target.value,
    });
  };
  formHandler = async (e) => {
    e.preventDefault();
    const token = process.env.REACT_APP_LOCATION_TOKEN;
    this.setState({
      error: false,
      weatherError: false,
    });
    let locations;
    try {
      locations = await axios.get(
        `https://eu1.locationiq.com/v1/search.php?key=${token}&q=${this.state.inputLocation}&format=json`
      );
    } catch (error) {
      this.setState({
        error: true,
        errorValue: error.message,
      });
    }
    let location = locations ? locations.data[0] : {};

    const server = process.env.REACT_APP_BACKEND_SERVER;
    let weather;
    try {
      weather = await axios.get(
        `${server}/weather?city_name=${this.state.inputLocation}`
      );
    } catch (error) {
      weather = error.response;
      this.setState({
        weatherError: true,
        weatherErrorValue: error.message,
      });
    }
    console.log(weather);
    const allWeatherData = {
      data: weather.data,
      error: this.state.weatherError,
      errorValue: this.state.weatherErrorValue,
    };

    this.props.getFormData(
      location,
      this.state.error,
      this.state.errorValue,
      allWeatherData
    );
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.formHandler} style={{ margin: '0 0 20px 0' }}>
          <Form.Group controlId="formBasicEmail" style={{ width: '250px' }}>
            <Form.Label>Your Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a valid location"
              onChange={this.locationInputHandler}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormLocation;
