/* Modules */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import SignIn from '../../pages/SignIn';

/**
 * Root component
 */
const Root = () => {
	return (
		<Router>
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/sign-in" component={SignIn} />
		</Router>
	);
};

export default Root;
