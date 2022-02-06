import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.651070,
      lng: -79.347015
    },
    zoom: 11
  };

  state = {
    divcontainer:false,
  }

  render() {
    var Handlechange = e => 
    {
      this.setState({divcontainer:!this.state.divcontainer});
    }
    const x = this.state.divcontainer;
    return (
      <div>
        <button onClick={Handlechange}>{x?'Hide':'Show'}</button>
        {
          x && <div style={{ height: '80vh', width: '80%'}}>
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
      </div>
    );
  }
}

export default SimpleMap;