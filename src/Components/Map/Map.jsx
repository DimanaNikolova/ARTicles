import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="Map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDMjjDlT--kVYx0tKeUh0kMEMyM0KXBpHk' }}
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
    );
  }
}
 
export default SimpleMap