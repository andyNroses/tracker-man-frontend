/* Modules */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import TextInput from './TextInput';
import Button from './Button';
import SocialLogin from './SocialLogin';
import Firebase from '../../firebase';
import Message from '../Message';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async () => {
        try {
            await Firebase.login(email, password);
            props.history.replace('/');
        } catch(error) {
            Message.error(error.message);
        }
    }

    return (
        <React.Fragment>
            <TextInput placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <TextInput placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
            <Button color='#50514F' onClick={onLogin}>Log In</Button>
            <SocialLogin />
        </React.Fragment>
    );
}

export default withRouter(Login);