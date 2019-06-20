/* Modules */
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 8px;
	margin-top: 8px;
`;

const SocialLogin = () => {
	return (
		<Container>
			<Button color="#404040">Facebook</Button>
			<Button color="#404040">Google</Button>
		</Container>
	);
};

export default SocialLogin;
