/* Modules */
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import routes from './routes';

/**
 * App
 */
const App = () => {
    return (
        <React.Fragment>
            <Root routes={routes} />
        </React.Fragment>
    );
};

/* Render */
render(<App />, document.getElementById('app'));
