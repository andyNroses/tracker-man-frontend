/* Modules */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import routes from '../../routes';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
	padding-top: 30px;
	grid-area: navigation;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: repeat(4, 50px);
	grid-template-areas:
		'library'
		'add'
		'profile'
		'settings';
	justify-items: center;
	color: #f2f2f2;
	background-color: ${props => props.theme.primary};
	@media only screen and (max-width: ${props =>
			props.theme.responsive.mobile}) {
		padding-top: 0;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 100%;
		grid-template-areas: 'library add profile settings';
	}
`;

const IconWrapper = styled.div`
	grid-area: ${props => props.area};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
	font-size: 25px;
	cursor: pointer;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
`;

const DarkCache = styled.div`
	width: 100%;
	background-color: #292929;
	transition: grid-area 0.2s ease-in-out;
	grid-area: ${props => {
		const route = routes.filter(route => route.path == props.active)[0];
		return route.name;
	}};
`;

const Navigation = props => {
	const toPage = path => {
		props.history.push(path);
	};
	return (
		<Container>
			<DarkCache active={props.active} />
			{routes.map(route => (
				<IconWrapper key={route.path} area={route.name}>
					<Icon onClick={() => toPage(route.path)} icon={route.icon} />
				</IconWrapper>
			))}
		</Container>
	);
};

export default withRouter(Navigation);
