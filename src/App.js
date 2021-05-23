import React, { Component } from 'react';
import FormLocation from './components/FormLocation';
import Location from './components/Location';
import {Container,Row,Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        formData:{},
        error:false,
        errorValue:'',
    }
}
  getFormData = (formData,error,errorValue) =>{
    this.setState({
      formData,
      error,
      errorValue
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm='12' lg="6">
              <FormLocation getFormData={this.getFormData}/>
            </Col>
            <Col sm='12' lg="6">
              <Location 
              formData={this.state.formData} 
              errorValue={this.state.errorValue} 
              error={this.state.error}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
