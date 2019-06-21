/* Pages */
import Library from './pages/Library';
import Add from './pages/Add';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import {
	faBookmark,
	faPlusCircle,
	faUser,
	faCog
} from '@fortawesome/free-solid-svg-icons';

/* Routes */
const routes = [
	{
		name: 'Library',
		path: '/dashboard/library',
		component: Library,
		icon: faBookmark,
		cacheTop: '15px'
	},
	{
		name: 'Add',
		path: '/dashboard/add',
		component: Add,
		icon: faPlusCircle,
		cacheTop: '75px'
	},
	{
		name: 'Profile',
		path: '/dashboard/profile',
		component: Profile,
		icon: faUser,
		cacheTop: '135px'
	},
	{
		name: 'Settings',
		path: '/dashboard/settings',
		component: Settings,
		icon: faCog,
		cacheTop: '195px'
	}
];

export default routes;
