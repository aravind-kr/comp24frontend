import React from 'react';
import Link from 'next/link';
import { Container, Navbar } from 'react-bootstrap';

// const links = [
//   { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`
//   return link
// })

const Nav = () => (
	<>
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Cluster	and	Cloud	Computing	Assignment	2 -
City Analytics on	the	Cloud</Navbar.Brand>

				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						Team Details: <a href="#login">35</a>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>

		<style jsx>{`
			:global(body) {
				margin: 0;
				font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
			}
			nav {
				text-align: center;
			}
			ul {
				display: flex;
				justify-content: space-between;
			}
			nav > ul {
				padding: 4px 16px;
			}
			li {
				display: flex;
				padding: 6px 8px;
			}
			a {
				color: #067df7;
				text-decoration: none;
				font-size: 13px;
			}
		`}</style>
	</>
);

export default Nav;
