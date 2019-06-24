class Auth {
	constructor(app) {
		this.app = app;
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

	loginProvider() {
		const redirect = provider => {
			this.auth.signInWithRedirect(provider);
			return this.auth.getRedirectResult();
		};
		const facebook = () => {
			var provider = new this.app.auth.FacebookAuthProvider();
			redirect(provider);
		};
		const google = () => {
			var provider = new this.app.auth.GoogleAuthProvider();
			redirect(provider);
		};
		return {
			facebook,
			google
		};
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

export default Auth;
