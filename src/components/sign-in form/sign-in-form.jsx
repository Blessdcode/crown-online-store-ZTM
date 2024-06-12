/** @format */
import { useState, useContext } from "react";
import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import "./sign-in-form.styles.scss";
import Button from "../button/button";


const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;


	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signWithGoogle = async () => {
		 await signInWithGooglePopup();
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			console.log(response);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Incorrect password");
					break;
				case "auth/user-not-found":
					alert("User does not exist");
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up-container">
			<h2>Already have an account?</h2>
			<span>Enter your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="text"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>
				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>

				<div className="btn-container">
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						button="primary"
						onClick={signWithGoogle}>
						Sign In Google
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
