/* Modules */
import React from 'react';
import Section from '../../components/Section';
import SearchBar from '../../components/SearchBar';
import Marvel from '../../marvel';

const Add = props => {
	const onSearchChange = async e => {
		try {
			const response = await Marvel.apiCall();
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<React.Fragment>
			<Section>Search by volume, issue, character</Section>
			<SearchBar onChangeAction={onSearchChange} />
		</React.Fragment>
	);
};

export default Add;
