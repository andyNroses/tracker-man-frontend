/* Modules */
import styled from 'styled-components';

const TextInput = styled.input`
	width: 100%;
	background: #ffffff;
	border: ${props =>
		props.invalid ? '2px solid #ED6565' : '2px solid rgba(0, 0, 0, 0.1)'};
	box-sizing: border-box;
	height: 45px;
	padding: 5px;
	padding-left: 15px;
	outline: none;
	margin-bottom: 8px;
	color: #50514f;
	font-size: 16px;

	::placeholder {
		color: #cacaca;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		box-shadow: 0 0 0 30px white inset !important;
	}
`;

export default TextInput;
