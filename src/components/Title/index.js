/* Modules */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	text-align: center;
	color: #ffffff;
	margin-bottom: 50px;
	h1 {
		font-family: 'Passion One';
		text-transform: uppercase;
		font-size: 90px;
		margin: 0;
		@media only screen and (max-width: ${props =>
				props.theme.responsive.tablet}) {
			font-size: 70px;
		}
		@media only screen and (max-width: ${props =>
				props.theme.responsive.mobile}) {
			font-size: 35px;
		}
	}
	p {
		text-align: center;
		margin: 0;
		font-size: 20px;
		@media only screen and (max-width: ${props =>
				props.theme.responsive.mobile}) {
			font-size: 15px;
			width: 180px;
			margin: auto;
		}
	}
`;

const Title = ({ title, description }) => {
	return (
		<Container>
			<h1>{title}</h1>
			<p>{description}</p>
		</Container>
	);
};

export default Title;
