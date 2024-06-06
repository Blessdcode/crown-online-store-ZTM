/** @format */
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
	auth,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";
import SignUpForm from "../../components/sign-up form/sign-up-form";


const SignIn = () => {
	useEffect(() => {
		async function fetchRedirectResult() {
			const response = await getRedirectResult(auth);
			if (response) {
				const userDocRef = await createUserDocumentFromAuth(
					response.user
				);
			 }
		}
		fetchRedirectResult();
	}, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign in page</h1>
			<button onClick={logGoogleUser}>sign with google</button>
			<button onClick={signInWithGoogleRedirect}>
				sign with google redirect
            </button>
<SignUpForm/>
            
		</div>
	);
};

export default SignIn;
