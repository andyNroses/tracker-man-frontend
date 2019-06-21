/* Modules */
import React from 'react';
import Title from '../../components/Title';
import LoginRegister from '../../components/LoginRegister';
import { withRouter } from 'react-router-dom';
import Firebase from '../../firebase';
import styled from 'styled-components';
import patternDots from '../../assets/img/pattern-dots.png';

const BackgroundRed = styled.div`
	background-color: ${props => props.theme.primary};
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: -9999;
`;

const BackgroundDark = styled.div`
	background-color: #292929;
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 50%;
	opacity: 1;
	border-top: 20px solid white;
	z-index: -9999;
`;

const BackgroundDots = styled.div`
	background-image: url(${patternDots});
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 50%;
	opacity: 0.1;
	z-index: -9990;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const SignIn = props => {
	if (Firebase.isAuthentified()) {
		props.history.replace('/dashboard/library');
		return null;
	} else {
		return (
			<React.Fragment>
				<BackgroundRed />
				<BackgroundDark />
				<BackgroundDots />
				<Container>
					<Title
						title="Tracker-Man"
						description="Keep track of your comic books readings!"
					/>
					<LoginRegister />
				</Container>
			</React.Fragment>
		);
	}
};

export default withRouter(SignIn);
