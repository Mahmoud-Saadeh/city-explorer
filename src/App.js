import React, { Component } from 'react';
import FormLocation from './components/FormLocation';
import Location from './components/Location';
import Weather from './components/Weather';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/Movies';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      error: false,
      errorValue: '',
      allWeatherData: {},
      allMovieData: {},
    };
  }
  getFormData = (formData, error, errorValue) => {
    this.setState({
      formData,
      error,
      errorValue,
    });
  };
  getWeatherData = (allWeatherData) => {
    this.setState({
      allWeatherData,
    });
  };
  getMoviesData = (allMovieData) => {
    let dateObj = new Date(allMovieData.data.date);
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    allMovieData.data.date = year + '/' + month + '/' + day;
    this.setState({
      allMovieData,
    });
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm="12" lg="6">
              <FormLocation
                getFormData={this.getFormData}
                getWeatherData={this.getWeatherData}
                getMoviesData={this.getMoviesData}
              />
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
            <>
              <h2 style={{ margin: '20px 0' }}>
                The Weather for {this.state.allWeatherData.data.length} Days
              </h2>
              <Row>
                <Weather
                  weatherData={this.state.allWeatherData.data}
                  error={this.state.allWeatherData.error}
                  errorValue={this.state.allWeatherData.errorValue}
                />
              </Row>
            </>
          )}
          {!this.state.error && this.state.allMovieData.data && (
            <>
              <h2 style={{ margin: '20px 0 10px 0' }}>
                Top {this.state.allMovieData.data.movies.length} Movies
              </h2>
              <p style={{ fontSize: '12px' }}>
                The last Update: {this.state.allMovieData.data.date}
              </p>
              <Row>
                <Movies
                  movieData={this.state.allMovieData.data.movies}
                  error={this.state.allMovieData.error}
                  errorValue={this.state.allMovieData.errorValue}
                />
              </Row>
            </>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
