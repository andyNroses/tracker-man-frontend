/* Modules */
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import AppLoader from './components/AppLoader';
import routes from './routes';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';
import Firebase from './firebase';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

/* Global style */
const GlobalStyle = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
    @import url(https://fonts.googleapis.com/css?family=Luckiest+Guy:regular);
    @import url(https://fonts.googleapis.com/css?family=Passion+One:regular,700,900);
    body {
        background-color: #292929;
        margin: 0;
        font-family: 'Roboto';
    }
`;

/**
 * App
 */
const App = () => {

    const [firebaseInit, setFirebaseInit] = useState(false);

    useEffect(() => {
        Firebase.isInit().then(value => {
            setFirebaseInit(value);
        })
    });

    return firebaseInit != false ? (
        <React.Fragment>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Root routes={routes} />
            </ThemeProvider>
        </React.Fragment>
    ) : <AppLoader />;
};

/* Render */
render(<App />, document.getElementById('app'));
