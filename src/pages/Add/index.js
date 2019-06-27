/* Modules */
import React from 'react';
import Section from '../../components/Section';
import SearchBar from '../../components/SearchBar';

const Add = props => {
	const onSearchChange = async e => {};
	return (
		<React.Fragment>
			<Section>Search by volume, issue, character</Section>
			<SearchBar onChangeAction={onSearchChange} />
		</React.Fragment>
	);
};

export default Add;
