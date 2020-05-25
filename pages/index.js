import React from 'react';
import Link from 'next/link';
import Page from '../components/auspol';
import Nav from '../components/nav';
import { Container } from 'react-bootstrap';

const Home = ({ values, cities, lat, long }) => (
	<>
		<Nav />
		<Container
			className="maincontainer"
			style={{
				marginTop: '50px',
			}}
		>
			<Page values={values} cities={cities} lat={lat} long={long} />
		</Container>
	</>
);

Home.getInitialProps = async (ctx) => {
	console.log('some');
	const res = await fetch('http://172.26.131.0:3000/data');
	const temp = await res.json();
  console.log(temp);
  const values = [ temp['adelaide'],  temp['melbourne'],   temp['sydney'], temp['brisbane'],temp['perth'] ]
  const cities = ['adelaide', 'melbourne', 'sydney', 'brisbane', 'perth']
  const lat = [-34.92, -37.80, -33.87, -27.469,-41.57 ]
  const long = [ 138.59, 144.97, 151.20, 153.02, 147.173 ]
	return { values, cities, lat, long };
};

export default Home;
