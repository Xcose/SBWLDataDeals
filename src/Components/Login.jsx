import React, { useState, useContext } from "react";
import Validation from "../Validation/LoginValidation";
import firebaseApp from "../firebase";
import { AuthContext } from "../Auth/Auth";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Link, Redirect } from "react-router-dom";
import { ErrorMessage } from "../Shared/Notifications";

const Login = ({ loginVisible, setLoginVisible }) => {
	const [credentials, setCredentials] = useState({
		username: null,
		password: null,
	});
	const [validationErrors, setValidationErrors] = useState({});

	const onChange = (e) => {
		let UpdatedCredentials = credentials;
		UpdatedCredentials[e.target.name] = e.target.value;
		setCredentials(UpdatedCredentials);
	};

	const Validate = () => {
		const valErrors = Validation(credentials);

		if (Object.keys(valErrors).length === 0) {
			onSubmit();
		} else {
			setValidationErrors(valErrors);
		}
	};

	const onSubmit = () => {
		// try to login to firebase
		firebaseApp
			.auth()
			.signInWithEmailAndPassword(credentials.username, credentials.password)
			.catch((err) => {
				// or catch errors
				const message = err.message.toString();
				ErrorMessage(message);
			});
	};

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to="/dash" />;
	}

	return (
		<div className="p-grid">
			<Dialog
				header="Please log in"
				visible={loginVisible}
				className="p-col-12 p-lg-4"
				onHide={() => setLoginVisible(false)}
			>
				<div className="p-field">
					<InputText
						className="p-w-100 p-mt-4"
						id="username"
						placeholder="Username"
						name="username"
						defaultValue={credentials.username}
						onChange={(e) => {
							onChange(e);
						}}
					/>
					{validationErrors.username && (
						<small id="username2-help" className="">
							{validationErrors.username}
						</small>
					)}
				</div>
				<div className="p-field">
					<Password
						className="p-mt-4"
						id="password"
						placeholder="password"
						name="password"
						defaultValue={credentials.password}
						toggleMask
						feedback={false}
						onChange={(e) => {
							onChange(e);
						}}
					/>
					{validationErrors.password && (
						<small id="username2-help" className="">
							{validationErrors.password}
						</small>
					)}
				</div>
				<Button
					label="Log in"
					className="p-button-raised p-button-secondary p-d-block p-mt-4 p-w-100"
					onClick={() => {
						// signOut();
						Validate();
					}}
				/>
			</Dialog>
		</div>
	);
};

export default Login;
