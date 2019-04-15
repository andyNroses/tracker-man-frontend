/* Modules */
import React from 'react';
import Banner from '../../components/Banner';
import LoginRegister from '../../components/LoginRegister';
import { withRouter } from 'react-router-dom';
import Firebase from '../../firebase';

const SignIn = (props) => {
    if (Firebase.isAuthentified()) {
        props.history.replace('/');
        return null;
    } else {
        return (
            <React.Fragment>
                <Banner />
                <LoginRegister />
            </React.Fragment>
        );
    }
}

export default withRouter(SignIn);