/** @format */
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
	auth,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";
import SignUpForm from "../../components/sign-up form/sign-up-form";
import SignInForm from "../../components/sign-in form/sign-in-form";
import './authentication.style.scss'

const Authentication = () => {
	// useEffect(() => {
	// 	async function fetchRedirectResult() {
	// 		const response = await getRedirectResult(auth);
	// 		if (response) {
	// 			const userDocRef = await createUserDocumentFromAuth(
	// 				response.user
	// 			);
	// 		 }
	// 	}
	// 	fetchRedirectResult();
	// }, []);


	return (
		<div className="authentication-container"> 
{/* 			
			<button onClick={signInWithGoogleRedirect}>
				sign with google redirect
            </button> */}
			<SignInForm/>
			<SignUpForm />
		</div>
	);
};

export default Authentication;
