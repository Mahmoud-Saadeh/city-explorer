import React, { Component } from 'react'
import {Button,Image} from 'react-bootstrap';
import Error from './Error';

export class Location extends Component {
    constructor(props){
        super(props);
        this.state = {
            zoom:14
        }
    }
    zoomIn = () =>{
        this.setState({
            zoom: this.state.zoom + 1
        })
        
    }
    zoomOut = () =>{
        
    this.setState({
        zoom: this.state.zoom - 1
    })
        
        
    }
    render() {
        return (
            <div>
                {this.props.formData.display_name && !this.props.error? (<>
                <h4>{this.props.formData.display_name}</h4>
                <ul>
                    <li>Latitude: {this.props.formData.lat}</li>
                    <li>Longitude: {this.props.formData.lon}</li>
                </ul>

                <Image 
                src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_TOKEN}&center=${this.props.formData.lat},${this.props.formData.lon}&zoom=${this.state.zoom}`} 
                alt={this.props.formData.display_name} 
                thumbnail 
                rounded 
                style={{width:'80%'}}
                />
                <div>
                    <Button variant="secondary" onClick={this.zoomIn} disabled={this.state.zoom >= 18 ? true : false}>+</Button>{'  '}
                    <Button variant="secondary" onClick={this.zoomOut} disabled={this.state.zoom <= 0 ? true : false}>-</Button>
                </div>
                </>) : <Error errorValue={this.props.errorValue}/>}
            </div>
        )
    }
}

export default Location
