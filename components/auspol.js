import React, { Component, useState } from 'react';
import { Card, ButtonGroup, ToggleButton, Modal, Table, thead, tbody } from 'react-bootstrap';
import MapContainer from './auspolMap.js';
export default function Auspol(props) {
	const [adlShow, set1Show] = useState(false);
	const [MelbShow, set2Show] = useState(false);
	const [BrisShow, set3Show] = useState(false);
	const [SydShow, set4Show] = useState(false);
	const [PerShow, set5Show] = useState(false);

	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'row', marginBottom: '40px' }}>
				<Card style={{ flex: 1, marginRight: '10px', height: '1000px' }}>
					<MapContainer values={props.values} cities={props.cities} lat={props.lat} long={props.long} height={'40%'} />
					<Card.Body style={{ marginTop: '72%' }}>
						<Card.Title>Scenario 1: Election Awareness Analysis </Card.Title>
						<Card.Text>
							The Awareness and Outspokeness about election and politics is analyzed under the first
							scenario in five major cities ('adelaide', 'melbourne', 'sydney', 'brisbane', 'perth'). The
							Bar chart below shows us the percentage of voters that are outspoken about election and politics
							on twitter.
						</Card.Text>
						<div style={{ marginLeft: '40px' }}>
							<ButtonGroup toggle>
								<ToggleButton type="radio" name="radio" value="1" onClick={() => set1Show(true)}>
									Adelaide
								</ToggleButton>
								<Modal show={adlShow} onHide={() => set1Show(false)} animation={false} aria-labelledby="modal-adl">
									<Modal.Header closeButton>
										<Modal.Title>Adelaide Readings</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Table striped bordered hover variant="dark">
											<thead>
												<tr>
													<th>No. Tweets</th>
													<th>Voter Count</th>
													<th>Percentage</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1664</td>
													<td>13858</td>
													<td>12%</td>
												</tr>
											</tbody>
										</Table>
									</Modal.Body>
								</Modal>
								<ToggleButton type="radio" name="radio" value="2" onClick={() => set2Show(true)}>
									Melbourne
								</ToggleButton>
								<Modal show={MelbShow} onHide={() => set2Show(false)} animation={false} aria-labelledby="modal-melb">
									<Modal.Header closeButton>
										<Modal.Title>Melbourne Readings</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Table striped bordered hover variant="dark">
											<thead>
												<tr>
													<th>No. Tweets</th>
													<th>Voter Count</th>
													<th>Percentage</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>5081</td>
													<td>38285</td>
													<td>13.27%</td>
												</tr>
											</tbody>
										</Table>
									</Modal.Body>
								</Modal>
								<ToggleButton type="radio" name="radio" value="3" onClick={() => set3Show(true)}>
									Brisbane
								</ToggleButton>
								<Modal show={BrisShow} onHide={() => set3Show(false)} animation={false} aria-labelledby="modal-bris">
									<Modal.Header closeButton>
										<Modal.Title>Brisbane Readings</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Table striped bordered hover variant="dark">
											<thead>
												<tr>
													<th>No. Tweets</th>
													<th>Voter Count</th>
													<th>Percentage</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>4671</td>
													<td>38879</td>
													<td>12.01%</td>
												</tr>
											</tbody>
										</Table>
									</Modal.Body>
								</Modal>
								<ToggleButton type="radio" name="radio" value="3" onClick={() => set4Show(true)}>
									Sydney
								</ToggleButton>
								<Modal show={SydShow} onHide={() => set4Show(false)} animation={false} aria-labelledby="modal-syd">
									<Modal.Header closeButton>
										<Modal.Title>Sydney Readings</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Table striped bordered hover variant="dark">
											<thead>
												<tr>
													<th>No. Tweets</th>
													<th>Voter Count</th>
													<th>Percentage</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>5320</td>
													<td>24050</td>
													<td>22.12%</td>
												</tr>
											</tbody>
										</Table>
									</Modal.Body>
								</Modal>
								<ToggleButton type="radio" name="radio" value="3" onClick={() => set5Show(true)}>
									Perth
								</ToggleButton>
								<Modal show={PerShow} onHide={() => set5Show(false)} animation={false} aria-labelledby="modal-per">
									<Modal.Header closeButton>
										<Modal.Title>Perth Readings</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Table striped bordered hover variant="dark">
											<thead>
												<tr>
													<th>No. Tweets</th>
													<th>Voter Count</th>
													<th>Percentage</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>3433</td>
													<td>1181</td>
													<td>29.05%</td>
												</tr>
											</tbody>
										</Table>
									</Modal.Body>
								</Modal>
							</ButtonGroup>
						</div>
					</Card.Body>
					<Card.Img variant="top" src="static/tweets.png" />
				</Card>

				<Card style={{ flex: 1, marginLeft: '10px', height: '930px' }}>
					<MapContainer
						values={props.climateValues}
						cities={props.cities}
						lat={props.lat}
						long={props.long}
						height={'43%'}
					/>
					<Card.Body style={{ marginTop: '72%' }}>
						<Card.Title> Scenario 2: Climate and Election </Card.Title>
						<Card.Text>
							The Reach of ClimateChange and it's affect of corelation with the election can 
							be analysis through Climate and Election related tweets. 5 major cities like 
							('adelaide', 'melbourne', 'sydney', 'brisbane', 'perth') are included for this 
							analysis. The Bar chart below illustrates the results found.
						</Card.Text>
						<Card.Img variant="top" src="static/climate.png" />
					</Card.Body>
				</Card>
			</div>
		</>
	);
}
