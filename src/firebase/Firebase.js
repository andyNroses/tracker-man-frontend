import app from 'firebase/app';
import 'firebase/auth';
import config from './config';

class Firebase {
	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
	}

	async register(username, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password);
		return this.auth.currentUser.updateProfile({
			displayName: username
		});
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password);
	}

	loginFacebook() {
		var provider = new app.auth.FacebookAuthProvider();
		return this.auth.signInWithPopup(provider);
	}

	logout() {
		return this.auth.signOut();
	}

	getCurrentUsername() {
		return this.auth.currentUser.displayName;
	}

	isInit() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve);
		});
	}

	isAuthentified() {
		return this.auth.currentUser != null;
	}
}

export default new Firebase();
