/** @format */

import { initializeApp } from "firebase/app";
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
} from "firebase/auth";

import {
   getFirestore,
   doc,
   getDoc,
   setDoc,
   collection,
   writeBatch,
   query,
   getDocs,
} from "firebase/firestore";
import { compile } from "sass";

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
   prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
   signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
   signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
   collectionKey,
   objectsToAdd
) => {
   const collectionRef = collection(db, collectionKey);
   const batch = writeBatch(db);

   objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
   });

   await batch.commit();
   console.log("done");
};

export const getCategoriesAndDocuments = async () => {
   const collectionRef = collection(db, "categories");
   const q = query(collectionRef);

   const querySnapShot = await getDocs(q);
   const categoryMap = querySnapShot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
   }, {});
   return categoryMap;
};

export const createUserDocumentFromAuth = async (
   userAuth,
   additionalInformation = {}
) => {
   if (!userAuth) return;
   const userDocRef = doc(db, "users", userAuth.uid);

   const userSnapshot = await getDoc(userDocRef);

   // checking if user exist
   if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation,
         });
      } catch (error) {
         console.log(error.message);
      }
   }

   return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;
   return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;
   return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
   onAuthStateChanged(auth, callback);
