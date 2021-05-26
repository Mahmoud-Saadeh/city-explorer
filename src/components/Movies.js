import React, { Component } from 'react';
import { Row, Card, Col, Alert } from 'react-bootstrap';

export class Movies extends Component {
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
              {this.props.movieData}
            </Alert>
          </Col>
        ) : (
          <>
            {this.props.movieData.map((item, index) => (
              <Col sm="6" lg="4" key={index}>
                <Card style={{ margin: '20px 0 20px 0' }}>
                  {item.image_url && (
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500${item.image_url}`}
                    />
                  )}
                  <Card.Body>
                    <Card.Text>{item.released_on}</Card.Text>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.overview}</Card.Text>
                    <Row
                      style={{
                        margin: '10px 0px 0 0',
                      }}
                    >
                      <Col sm="12" lg="6">
                        <Card.Text style={{ textAlign: 'center' }}>
                          popularity: {item.popularity}
                        </Card.Text>
                      </Col>
                      <Col sm="12" lg="6">
                        <Card.Text style={{ textAlign: 'center' }}>
                          Total Votes: {item.total_votes}
                        </Card.Text>
                      </Col>
                      <Col sm="12" lg="6">
                        <Card.Text style={{ textAlign: 'center' }}>
                          Avg. Votes: {item.average_votes}
                        </Card.Text>
                      </Col>
                    </Row>
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

export default Movies;
