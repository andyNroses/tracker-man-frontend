import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
	position: relative;
`;

const Input = styled.input`
	margin: 0;
	width: 100%;
	height: 30px;
	background-color: white;
	border-radius: 10px;
	border: none;
	padding-left: 30px;
	outline: none;
	caret-color: #292929;
	color: #292929;
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		box-shadow: 0 0 0 30px white inset !important;
	}
`;

const Icon = styled(FontAwesomeIcon)`
	position: absolute;
	left: 10px;
	top: 0;
	bottom: 0;
	margin: auto;
	color: #292929;
	opacity: 0.5;
`;

const SearchBar = ({ onChangeAction }) => {
	return (
		<Container>
			<Input onChange={onChangeAction} />
			<Icon icon={faSearch} />
		</Container>
	);
};

export default SearchBar;
