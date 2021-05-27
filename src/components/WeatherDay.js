import React, { Component } from 'react';
import { Row, Card, Col, Image } from 'react-bootstrap';

export class WeatherDay extends Component {
  render() {
    return (
      <Card.Body>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '0px 20px 0 0',
          }}
        >
          <Image
            src={this.props.item.icon}
            alt={this.props.item.description}
            style={{ width: '30px' }}
          />
          <Card.Text
            style={{
              margin: '0px 7px',
            }}
          >
            {this.props.item.description}
          </Card.Text>
        </div>
        <Card.Text>{this.props.item.date}</Card.Text>
        <Row
          style={{
            margin: '10px 0px 0 0',
          }}
        >
          <Col sm="12" lg="6">
            <Card.Text style={{ textAlign: 'center' }}>
              Min. Temp.: {this.props.item.low_temp} &#8451;
            </Card.Text>
          </Col>
          <Col sm="12" lg="6">
            <Card.Text style={{ textAlign: 'center' }}>
              Max. Temp.: {this.props.item.max_temp} &#8451;
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    );
  }
}

export default WeatherDay;
