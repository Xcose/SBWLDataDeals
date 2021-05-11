import React, { useState } from "react";
import { Button } from "primereact/button";
import { SuccessMessage, ErrorMessage } from "../../Shared/Notifications";
import firebaseApp from "../../firebase";
import emailjs from "emailjs-com";

const Summary = ({
	personalInformation,
	deliveryInformation,
	packageInformation,
	back,
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const placeOrder = async () => {
		try {
			//set loading to true
			setIsLoading(true);

			// create customer account
			const user = await firebaseApp
				.auth()
				.createUserWithEmailAndPassword(
					personalInformation.email,
					personalInformation.password
				);
			//Log customer in
			await firebaseApp
				.auth()
				.signInWithEmailAndPassword(
					personalInformation.email,
					personalInformation.password
				);

			// remove customer password from data
			delete personalInformation.password;
			delete personalInformation.confirmPassword;

			// add customer details to database
			await firebaseApp
				.firestore()
				.collection("personal")
				.doc(user.user.uid)
				.set({ ...personalInformation, ...deliveryInformation });

			// add customer package selection to database
			await firebaseApp
				.firestore()
				.collection("product")
				.doc(user.user.uid)
				.set(packageInformation);

			// Show success notifcation
			const message =
				"Your order has been placed. Please see your email for more information";
			SuccessMessage(message);

			// send client an email
			await emailjs.sendForm(
				"smtp_server",
				"order_template",
				"#order_form",
				"user_2NUlgzcOgBlL7JKjxQraj"
			);
		} catch (err) {
			const message = err.message.toString();
			ErrorMessage(message);
		}
		setIsLoading(false);
	};
	return (
		<>
					<h1>Summary</h1>
					<p>{personalInformation.name} {personalInformation.surname}</p>
					<p>{personalInformation.id}</p>
					<p>{personalInformation.email}</p>
					<p>{deliveryInformation.street}, {deliveryInformation.suburb}, {deliveryInformation.town}, {deliveryInformation.postCode}</p>
							<p>{packageInformation.name}</p>
							<p>R {packageInformation.price} + R 50</p>
							<p>Total: R {packageInformation.price + 50}</p>
					<form id="order_form">
						<input type="hidden" name="name" value={personalInformation.name} />
						<input
							type="hidden"
							name="surname"
							value={personalInformation.surname}
						/>
						<input
							type="hidden"
							name="email"
							value={personalInformation.email}
						/>
						<input
							type="hidden"
							name="package"
							value={packageInformation.name}
						/>
					</form>
					<Button
						label="Place Order"
						className="p-button-raised p-button-secondary p-d-block p-mt-4 p-w-100"
						disabled={isLoading}
						onClick={() => {
							placeOrder();
						}}
					/>
					<Button
						label="Back"
						className="p-button-raised p-button-secondary p-d-block p-mt-4 p-w-100"
						onClick={() => {
							back();
						}}
					/>
		</>
	);
};

export default Summary;
