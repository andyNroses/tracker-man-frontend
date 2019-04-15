/* Modules */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Firebase from '../../firebase';

const Home = (props) => {

    const onLogout = async () => {
        await Firebase.logout();
        props.history.replace('/sign-in');
    }

    if (!Firebase.isAuthentified()) {
        props.history.replace('/sign-in');
        return null;
    } else {
        return (
            <React.Fragment>
                <h1>Home: Tracker-man</h1>
                <h2>Hello { Firebase.getCurrentUsername() }</h2>
                <button onClick={onLogout}>Logout</button>
            </React.Fragment>
        );
    }
}

export default withRouter(Home);