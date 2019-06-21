/* Modules */
import React from 'react';
import Firebase from '../../firebase';

const Library = props => {
	const onLogout = async () => {
		await Firebase.logout();
		props.history.replace('/sign-in');
	};
	return (
		<React.Fragment>
			<h1>Library: Tracker-man</h1>
			<h2>Hello {Firebase.getCurrentUsername()}</h2>
			<button onClick={onLogout}>Logout</button>
		</React.Fragment>
	);
};

export default Library;
