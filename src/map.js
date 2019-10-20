import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import stores from './store_directory.json'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapGoogle extends Component {
    constructor(props) {
      super(props);
      this.mapRef = React.createRef();
      this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        markers: [],
        favorites: []
      }
    }
    
    render() {
      return (
        <div>
            <div className="col-sm-12 col-md-9">
              <Map
                style={style}
                google={this.props.google}
                initialCenter={{
                  lat: 19.4978,
                  lng: -99.1269
                }}
                zoom={10}
                onClick={this.onMapClicked}
              > 
              </Map>
            </div>
          </div>
        
      )
    }
  };
  
  const style = {
    width: '70%',
    height: '70%'
  }
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyDERvlt0nQ-KkOnv_O77mZbMcqiv_XlAR0")
  })(MapGoogle)