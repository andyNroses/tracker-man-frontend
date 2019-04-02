/* Pages */
import Home from './pages/Home';
import SignIn from './pages/SignIn';

/* Routes */
const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'SignIn',
        path: '/sign-in',
        component: SignIn
    }
];

export default routes;