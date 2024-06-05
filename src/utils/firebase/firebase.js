/** @format */

import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCLGEpWy8fYTg5cd6GF5s8Y7MYxUH28vRc",
	authDomain: "crwn-clothing-db-8e1fd.firebaseapp.com",
	projectId: "crwn-clothing-db-8e1fd",
	storageBucket: "crwn-clothing-db-8e1fd.appspot.com",
	messagingSenderId: "884218866959",
	appId: "1:884218866959:web:d53084bd5ef1e202cfe27a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);

	console.log(userDocRef);
	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());

    // checking if user exist
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
            console.log(error.message);
        }
	}

    return userDocRef
};