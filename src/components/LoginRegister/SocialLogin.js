/* Modules */
import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Firebase from '../../firebase';
import Message from '../Message';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 8px;
	margin-top: 8px;
`;

const SocialLogin = props => {
	const onFacebookLogin = async () => {
		try {
			await Firebase.auth.loginProvider().facebook();
			props.history.replace('/dashboard/library');
		} catch (error) {
			Message.error(error.message);
		}
	};

	const onGoogleLogin = async () => {
		try {
			await Firebase.auth.loginProvider().google();
			props.history.replace('/dashboard/library');
		} catch (error) {
			Message.error(error.message);
		}
	};

	return (
		<Container>
			<Button onClick={onFacebookLogin} color="#404040">
				Facebook
			</Button>
			<Button onClick={onGoogleLogin} color="#404040">
				Google
			</Button>
		</Container>
	);
};

export default withRouter(SocialLogin);
