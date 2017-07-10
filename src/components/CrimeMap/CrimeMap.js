import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import _ from 'lodash';
import policeAPI from '../../lib/police-api.js'

const Map = withGoogleMap(props => (
	<GoogleMap
	ref={props.onMapLoad}
	defaultZoom={12}
	defaultCenter={{ lat: 51.549047, lng: -0.036865 }} 
	onClick={props.onMapClick}
	>
	{props.markers.map((marker, index) => (
	  <Marker
    {...marker}
    onRightClick={() => props.onMarkerRightClick(index)}
	  />
	))}
	</GoogleMap>
));

export default class CrimeMap extends Component {

 state = {
    markers: [{
      position: {
        lat: 51.474450,
        lng: -0.035334,
      },
      key: `Art`,
      defaultAnimation: 2,
    }],
  }; 

  
  setCrimeMarkers = async (event,longitude,latitude) => {

    let crimes = [];

    try {

      crimes = await policeAPI.getCrimesForLocation(event.latLng.lat(),event.latLng.lng(),new Date(2017,4)); //TODO create date input
      
    } catch(e) {
      console.error(e);
    }

    let crimeMarkers = crimes.map((crime,i)=>{
      return {
        position: {
          lat: crime.lat, lng: crime.lng
        },
        label: crime.type,
        key: i,
        defaultAnimation: 2
      }
    });

    this.setState({
      markers: crimeMarkers
    });

  }
  
  render() {
    return(
      <Map
      containerElement={
        <div style={{ height: `500px`, width: `100%` }} />
      }
      mapElement={
        <div style={{ height: `450px`, width: `100%` }} />
      }
      onMapLoad={_.noop}
      onMapClick={this.setCrimeMarkers}
      markers={this.state.markers}
      onMarkerRightClick={_.noop}
      />
    );
  }
}



