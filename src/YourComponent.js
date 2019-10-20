import React, { Component } from 'react';
import MapGoogle from './map.js'

/*
* Use this component as a launching-pad to build your functionality.
*
*/
class YourComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <h3>Tiendas</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <MapGoogle/>
          </div>
        </div>
      </div>
    );
  }
}

export default YourComponent;
