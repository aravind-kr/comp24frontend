import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
export class MapContainer extends Component {
	render() {
		console.log(this.props);
		var values = this.props.values;
		var cities = this.props.cities;
		var lat = this.props.lat;
		var long = this.props.long;
		return (
			<Map
				initialCenter={{
					lat: -34.2801,
					lng: 146.0455,
				}}
				google={this.props.google}
				style={{ width: '100%', height: '70%', position: 'relative' }}
				className={'map'}
				zoom={4}
			>
				{lat.map(function (item, index) {
					return (
						<Marker
							key={index}
							title={cities[index] + ' - ' + values[index]}
							name={'SOMA'}
							position={{ lat: item, lng: long[index] }}
						/>
					);
				})}
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDsbkS6EfywlArmAjAbtXzuBY9F38SWhfI',
})(MapContainer);