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
		name: 'library',
		path: '/dashboard/library',
		component: Library,
		icon: faBookmark,
		cacheTop: '15px'
	},
	{
		name: 'add',
		path: '/dashboard/add',
		component: Add,
		icon: faPlusCircle,
		cacheTop: '75px'
	},
	{
		name: 'profile',
		path: '/dashboard/profile',
		component: Profile,
		icon: faUser,
		cacheTop: '135px'
	},
	{
		name: 'settings',
		path: '/dashboard/settings',
		component: Settings,
		icon: faCog,
		cacheTop: '195px'
	}
];

export default routes;
