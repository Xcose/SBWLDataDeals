import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
	apiKey: "AIzaSyBz4BlSl7E13zumeE1nCppZ3jKcqYwkrKY",
	authDomain: "sbwl-e1331.firebaseapp.com",
	databaseURL: "https://sbwl-e1331.firebaseio.com",
	projectId: "sbwl-e1331",
	storageBucket: "sbwl-e1331.appspot.com",
	messagingSenderId: "222995456474",
	appId: "1:222995456474:web:209129ff25528e0851a0e3",
	measurementId: "G-DJQE010G86",
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
