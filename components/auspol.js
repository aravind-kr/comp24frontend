import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './auspolMap.js';
export default function Auspol(props) {
	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<Card style={{ flex: 1, marginRight: '10px', height: '500px' }}>
					<MapContainer values={props.values} cities={props.cities} lat={props.lat} long={props.long} />
					{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
					<Card.Body style={{ marginTop: '70%' }}>
					<Card.Title>Election Analysis </Card.Title>
						<Card.Text>
							Election related tweet count from 5 major cities ('adelaide', 'melbourne', 'sydney', 'brisbane', 'perth') are displayed above. Please hover over the marker of exact value.
						</Card.Text>
					</Card.Body>
				</Card>

				<Card style={{ flex: 1, marginLeft: '10px' }}>
					<MapContainer values={props.values} cities={props.cities} lat={props.lat} long={props.long} />
					{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
					<Card.Body style={{ marginTop: '70%' }}>
						<Card.Title>Election Analysis </Card.Title>
						<Card.Text>
							Election related tweet count from 5 major cities ('adelaide', 'melbourne', 'sydney', 'brisbane', 'perth') are displayed above. Please hover over the marker of exact value.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</>
	);
}
