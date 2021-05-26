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
      movieError: false,
      movieErrorValue: '',
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
      movieError: false,
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
        `${server}/weather?lat=${location.lat}&lon=${location.lon}`
      );
    } catch (error) {
      weather = error.response;
      this.setState({
        weatherError: true,
        weatherErrorValue: `${error.message}, ${error.response.data}`,
      });
    }
    let movie;
    try {
      movie = await axios.get(
        `${server}/movies?city_name=${this.state.inputLocation}`
      );
    } catch (error) {
      movie = error.response;
      this.setState({
        movieError: true,
        movieErrorValue: `${error.message}, ${error.response.data}`,
      });
    }
    const allWeatherData = {
      data: weather.data,
      error: this.state.weatherError,
      errorValue: this.state.weatherErrorValue,
    };
    const allMovieData = {
      data: movie.data,
      error: this.state.movieError,
      errorValue: this.state.movieErrorValue,
    };

    this.props.getFormData(
      location,
      this.state.error,
      this.state.errorValue,
      allWeatherData,
      allMovieData
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
          <Button
            variant="primary"
            type="submit"
            disabled={this.state.inputLocation ? false : true}
          >
            Explore!
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormLocation;
