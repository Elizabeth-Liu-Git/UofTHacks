import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SearchBar from './MapSearchBar.js'
import Paper from '@mui/material/Paper';

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
    divcontainer:true,
  }

  render() {
    var Handlechange = e => 
    {
      this.setState({divcontainer:!this.state.divcontainer});
    }
    const x = this.state.divcontainer;
    return (
      <div>
        <Paper sx={{ width: 400 }} elevation={15}>
        <SearchBar color='secondary'/>
        </Paper>
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