/* Modules */
import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';

const Container = styled.div`
	width: 400px;
	padding: 30px;
	background: #ffffff;
	@media only screen and (max-width: ${props =>
			props.theme.responsive.mobile}) {
		width: 80%;
		padding: 10px;
	}
`;

const Tabs = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding-bottom: 10px;
	@media only screen and (min-width: ${props =>
			props.theme.responsive.tablet}) {
		display: none;
	}
`;

const Tab = styled.span`
	cursor: pointer;
	text-transform: uppercase;
	font-weight: bold;
	color: ${props => (props.active ? '#50514F' : 'CACACA')};
	position: relative;
	::before {
		content: '';
		display: inline-block;
		width: 8px;
		height: 8px;
		background-color: ${props => (props.active ? '#50514F' : 'CACACA')};
		position: absolute;
		top: 0;
		bottom: 0;
		left: ${props => (props.left ? '-15px' : 'none')};
		right: ${props => (props.right ? '-15px' : 'none')};
		margin: auto;
	}
`;

const LoginRegister = () => {
	const [active, setActive] = useState('login');
	const Content = active == 'login' ? Login : Register;
	return (
		<Container>
			<Tabs>
				<Tab left active={active == 'login'} onClick={() => setActive('login')}>
					Login
				</Tab>
				<Tab
					right
					active={active == 'register'}
					onClick={() => setActive('register')}
				>
					Register
				</Tab>
			</Tabs>
			<Content />
		</Container>
	);
};

export default LoginRegister;
