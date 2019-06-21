import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '../../routes';
import Firebase from '../../firebase';
import Navigation from '../Navigation';
import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: 70px 1fr;
	grid-template-rows: 1fr 70px;
	grid-template-areas:
		'navigation content'
		'navigation content';
	@media only screen and (max-width: ${props =>
			props.theme.responsive.mobile}) {
		grid-template-columns: 65px 1fr;
		grid-template-rows: 1fr 60px;
		grid-template-areas:
			'content content'
			'navigation navigation';
	}
`;

const Content = styled.div`
	grid-area: content;
	padding: 20px;
`;

/**
 * Dashboard
 */
const Dashboard = props => {
	console.log(props);
	if (!Firebase.isAuthentified()) {
		props.history.replace('/sign-in');
		return null;
	} else {
		return (
			<React.Fragment>
				<Container>
					<Navigation active={props.location.pathname} />
					<Content>
						{routes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								component={route.component}
							/>
						))}
					</Content>
				</Container>
			</React.Fragment>
		);
	}
};

export default Dashboard;
