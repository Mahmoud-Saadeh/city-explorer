import React, { Component } from 'react';
import { Row, Card, Col, Image, Alert } from 'react-bootstrap';

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
                  <Card.Body>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: '0px 20px 0 0',
                      }}
                    >
                      <Image
                        src={item.icon}
                        alt={item.description}
                        style={{ width: '30px' }}
                      />
                      <Card.Text
                        style={{
                          margin: '0px 7px',
                        }}
                      >
                        {item.description}
                      </Card.Text>
                    </div>
                    <Card.Text>{item.date}</Card.Text>
                    <Row
                      style={{
                        margin: '10px 0px 0 0',
                      }}
                    >
                      <Col sm="12" lg="6">
                        <Card.Text style={{ textAlign: 'center' }}>
                          Min. Temp.: {item.low_temp} &#8451;
                        </Card.Text>
                      </Col>
                      <Col sm="12" lg="6">
                        <Card.Text style={{ textAlign: 'center' }}>
                          Max. Temp.: {item.max_temp} &#8451;
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

export default Weather;
