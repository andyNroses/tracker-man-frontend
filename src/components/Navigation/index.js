/* Modules */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import routes from '../../routes';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
	padding-top: 30px;
	grid-area: navigation;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 25px;
	color: #f2f2f2;
	background-color: ${props => props.theme.primary};
	position: relative;
	@media only screen and (max-width: ${props =>
			props.theme.responsive.mobile}) {
		flex-direction: row;
		justify-content: center;
	}
`;

const Icon = styled(FontAwesomeIcon)`
	margin-bottom: 35px;
	z-index: 15;
	cursor: pointer;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	@media only screen and (max-width: ${props =>
			props.theme.responsive.mobile}) {
		margin-bottom: 0;
	}
`;

const DarkCache = styled.div`
	width: 100%;
	height: 55px;
	background-color: #292929;
	position: absolute;
	top: ${props => {
		const route = routes.filter(route => route.path == props.active)[0];
		return route.cacheTop;
	}};
	transition: top 0.2s ease-in-out;
	left: 0;
	z-index: 10;
	@media only screen and (max-width: ${props =>
			props.theme.responsive.mobile}) {
		display: none;
	}
`;

const Navigation = props => {
	const toPage = path => {
		props.history.push(path);
	};
	return (
		<Container>
			<DarkCache active={props.active} />
			{routes.map(route => (
				<Icon
					onClick={() => toPage(route.path)}
					key={route.path}
					icon={route.icon}
				/>
			))}
		</Container>
	);
};

export default withRouter(Navigation);
