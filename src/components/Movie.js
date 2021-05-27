import React, { Component } from 'react';
import { Row, Card, Col } from 'react-bootstrap';

export class Movie extends Component {
  render() {
    return (
      <>
        {this.props.item.image_url && (
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${this.props.item.image_url}`}
          />
        )}
        <Card.Body>
          <Card.Text>{this.props.item.released_on}</Card.Text>
          <Card.Title>{this.props.item.title}</Card.Title>
          <Card.Text>{this.props.item.overview}</Card.Text>
          <Row
            style={{
              margin: '10px 0px 0 0',
            }}
          >
            <Col sm="12" lg="6">
              <Card.Text style={{ textAlign: 'center' }}>
                popularity: {this.props.item.popularity}
              </Card.Text>
            </Col>
            <Col sm="12" lg="6">
              <Card.Text style={{ textAlign: 'center' }}>
                Total Votes: {this.props.item.total_votes}
              </Card.Text>
            </Col>
            <Col sm="12" lg="6">
              <Card.Text style={{ textAlign: 'center' }}>
                Avg. Votes: {this.props.item.average_votes}
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </>
    );
  }
}

export default Movie;
