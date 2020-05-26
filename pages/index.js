import React from 'react';
import Link from 'next/link';
import Page from '../components/auspol';
import Nav from '../components/nav';
import { Container } from 'react-bootstrap';

const Home = ({ values, cities, lat, long, climateValues }) => (
	<>
		<Nav />
		<Container
			className="maincontainer"
			style={{
				marginTop: '50px',
			}}
		>
			<Page values={values} cities={cities} lat={lat} long={long} climateValues={climateValues} />
		</Container>
	</>
);

Home.getInitialProps = async (ctx) => {
	// const res = await fetch('http://172.26.134.144:3000/data', {
	//   method: 'GET', // *GET, POST, PUT, DELETE, etc.
	//   mode: 'cors', // no-cors, *cors, same-origin
	//   headers: {
	//     'Content-Type': 'application/json'
	//   },
	// });
	const temp = { adelaide: 1664, melbourne: 5081, sydney: 5320, brisbane: 4071, perth: 3433 };
	const values = [temp['adelaide'], temp['melbourne'], temp['sydney'], temp['brisbane'], temp['perth']];
	const cities = ['adelaide', 'melbourne', 'sydney', 'brisbane', 'perth'];
	const lat = [-34.92, -37.8, -33.87, -27.469, -31.9505];
  const long = [138.59, 144.97, 151.2, 153.02, 115.8605];
  const climateValues = [127, 316, 310, 178, 259]
	return { values, cities, lat, long, climateValues };
};

export default Home;
