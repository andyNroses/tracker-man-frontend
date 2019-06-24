import app from 'firebase/app';
import 'firebase/auth';
import config from './config';
import Auth from './Auth';

class Firebase {
	constructor() {
		app.initializeApp(config);
		this.auth = new Auth(app);
	}
}

export default new Firebase();
