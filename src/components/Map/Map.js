import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Button from './../Button.js'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.651070,
      lng: -79.347015
    },
    zoom: 11
  };

  render() {
    return (
      <div>
          <Button clickResponse="popMap()" />
      </div>
    );
  }
}

function popMap() {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }


  // Important! Always set the container height explicitly
  <div style={{ height: '100vh', width: '100%' }}>
  <GoogleMapReact
    bootstrapURLKeys={{ key: "AIzaSyBb-O1yrZ0z3b5rnp8N3XSZU2nQeDydVEk" }}
    defaultCenter={this.props.center}
    defaultZoom={this.props.zoom}
  >
    <AnyReactComponent
      lat={59.955413}
      lng={30.337844}
      text="My Marker"
    />
  </GoogleMapReact>
</div>
}

export default SimpleMap;