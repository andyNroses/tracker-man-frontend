/* Modules */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import TextInput from './TextInput';
import Button from './Button';
import SocialLogin from './SocialLogin';
import formValidation from './formValidtion';
import Firebase from '../../firebase';

const Register = props => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const stateSetters = {
		email: setEmail,
		username: setUsername,
		password: setPassword
	};

	const [hasLeavedEmail, setHasLeavedEmail] = useState(false);
	const [hasLeavedUsername, setHasLeavedUsername] = useState(false);
	const [hasLeavedPassword, setHasLeavedPassword] = useState(false);

	const hasLeaved = {
		email: { get: hasLeavedEmail, set: setHasLeavedEmail },
		username: { get: hasLeavedUsername, set: setHasLeavedUsername },
		password: { get: hasLeavedPassword, set: setHasLeavedPassword }
	};

	const [emailIsValid, setEmailIsValid] = useState(false);
	const [usernameIsValid, setUsernameIsValid] = useState(false);
	const [passwordIsValid, setPasswordIsValid] = useState(true);
	const [passwordConfirmed, setPasswordConfirmed] = useState(false);

	const validSetters = {
		email: setEmailIsValid,
		username: setUsernameIsValid,
		password: setPasswordIsValid
	};

	const onChange = (value, type) => {
		stateSetters[type](value);
		if (hasLeaved[type].get) {
			validSetters[type](formValidation(value, type));
		}
	};

	const onLeave = (value, type) => {
		validSetters[type](formValidation(value, type));
		hasLeaved[type].set(true);
	};

	const canRegister =
		emailIsValid && usernameIsValid && passwordIsValid && passwordConfirmed;

	const onRegister = async () => {
		try {
			await Firebase.register(username, email, password);
			props.history.replace('/');
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<React.Fragment>
			<TextInput
				placeholder="E-mail"
				invalid={!emailIsValid & hasLeavedEmail}
				onChange={e => onChange(e.target.value, 'email')}
				onBlur={e => onLeave(e.target.value, 'email')}
			/>
			<TextInput
				placeholder="Username"
				invalid={!usernameIsValid & hasLeavedUsername}
				onChange={e => onChange(e.target.value, 'username')}
				onBlur={e => onLeave(e.target.value, 'username')}
			/>
			<TextInput
				placeholder="Password"
				type="password"
				invalid={!passwordIsValid & hasLeavedPassword}
				onChange={e => onChange(e.target.value, 'password')}
				onBlur={e => onLeave(e.target.value, 'password')}
			/>
			<TextInput
				placeholder="Confirm password"
				type="password"
				invalid={!passwordConfirmed & hasLeavedPassword}
				onChange={e => setPasswordConfirmed(e.target.value == password)}
			/>
			<Button color="#ED6565" disabled={!canRegister} onClick={onRegister}>
				Register
			</Button>
			<SocialLogin />
		</React.Fragment>
	);
};

export default withRouter(Register);
