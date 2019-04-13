import firebase from 'firebase';
import * as firebaseui from 'firebaseui';

var config = {
    apiKey: "AIzaSyA8ASatqJm8jbwzoP-e3XAKOK7jbuVVv70",
    authDomain: "tracker-man.firebaseapp.com",
    databaseURL: "https://tracker-man.firebaseio.com",
    projectId: "tracker-man",
    storageBucket: "tracker-man.appspot.com",
    messagingSenderId: "46519459991"
};

firebase.initializeApp(config);