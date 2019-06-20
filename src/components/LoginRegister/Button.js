/* Modules */
import styled from 'styled-components';

const Button = styled.div`
	background-color: ${props => (props.disabled ? '#999999' : props.color)};
	color: ${props => (props.disabled ? '#B2B2B2' : 'white')};
	height: 45px;
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: bold;
	cursor: ${props => (props.disabled ? 'initial' : 'pointer')};
`;

export default Button;
