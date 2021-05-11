import React, { useRef } from "react";
import { Fieldset } from "primereact/fieldset";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import EditUserDetails from "./EditUserDetails";
import { useFormik } from "formik";
import { Toast } from "primereact/toast";
import firebaseApp from "../../firebase";
import { AuthContext } from "../../Auth/Auth";
import classNames from "classnames";
import firebase from "firebase";

const Profile = ({ personalInformation }) => {
	const { name, surname, mobile, email, id, street, suburb, town, postCode } =
		personalInformation;

	const toast = useRef(null);

	const showSuccess = () => {
		toast.current.show({
			severity: "success",
			summary: "Success Message",
			detail: "Data has bee saved successfully",
			life: 3000,
		});
	};

	const showError = (err) => {
		toast.current.show({
			severity: "error",
			summary: "Error Message",
			detail: err,
		});
	};

	const formik = useFormik({
		initialValues: {
			oldPassword: null,
			newPassword: null,
			confirmPassword: null,
		},
		validate: (data) => {
			let errors = {};

			if (!data.oldPassword) {
				errors.oldPassword = "Password is required!";
			}
			if (!data.newPassword) {
				errors.newPassword = "Password is required!";
			} else if (!/^([a-zA-Z0-9@*#]{8,15})$/.test(data.password)) {
				errors.newPassword =
					"Password must be between 8 and 15 characters. Match all alphanumeric character and predefined wild characters!";
			}
			if (!data.confirmPassword) {
				errors.confirmPassword = "Confirm Password is required!";
			} else if (data.confirmPassword !== data.newPassword) {
				errors.confirmPassword = "Password does not match!";
			}
			return errors;
		},
		onSubmit: (data) => {
			const user = firebase.auth().currentUser;
			const credential = firebase.auth.EmailAuthProvider.credential(
				user.email,
				data.oldPassword
			);

			user
				.reauthenticateWithCredential(credential)
				.then(() => {
					user
						.updatePassword(data.newPassword)
						.then(() => {
							// Update successful.
							// SuccessMessage("Password has been changed sucessfully");
							// setPasswordData(initialPassword);
							showSuccess();
							formik.resetForm();
						})
						.catch((err) => {
							showError(err.message);
							// An error happened.
							// ErrorMessage(err.message);
						});
				})
				.catch((err) => {
					showError(err.message);
					//error message
					// ErrorMessage(err.message);
				});
		},
	});

	const isFormFieldValid = (name) =>
		!!(formik.touched[name] && formik.errors[name]);

	const getFormErrorMessage = (name) => {
		return (
			isFormFieldValid(name) && (
				<small className="p-error">{formik.errors[name]}</small>
			)
		);
	};

	return (
		<>
			<Toast ref={toast} />

			<div className="p-col-12 p-lg-6">
				<Fieldset legend="Account Information" toggleable>
					<div className="p-text-left">
						<h3>
							Name: {name} {surname}
						</h3>
						<h3>ID: {id}</h3>
						<h3>Mobile: {mobile}</h3>
						<h3>Email: {email}</h3>
						<br />
						<h3>
							{street}, {suburb}
						</h3>
						<h3>{town}</h3>
						<h3>{postCode}</h3>
					</div>
					<EditUserDetails personalInformation={personalInformation} />
				</Fieldset>
			</div>
			<div className="p-col-12 p-lg-6">
				<Fieldset
					legend="Manage Account"
					toggleable
					className="p-col-12 p-lg-6"
				>
					<form onSubmit={formik.handleSubmit} className="p-fluid">
						<div className="p-field p-mb-5">
							<span className="p-float-label">
								<Password
									id="oldPassword"
									name="oldPassword"
									value={formik.values.oldPassword}
									onChange={formik.handleChange}
									className={classNames({
										"p-invalid": isFormFieldValid("oldPassword"),
									})}
									toggleMask
									feedback={false}
								/>
								<label
									htmlFor="oldPassword"
									className={classNames({
										"p-error": isFormFieldValid("oldPassword"),
									})}
								>
									Password*
								</label>
							</span>
							{getFormErrorMessage("oldPassword")}
						</div>
						<div className="p-field p-mb-5">
							<span className="p-float-label">
								<Password
									id="newPassword"
									name="newPassword"
									value={formik.values.newPassword}
									onChange={formik.handleChange}
									className={classNames({
										"p-invalid": isFormFieldValid("newPassword"),
									})}
									toggleMask
									feedback={false}
								/>
								<label
									htmlFor="newPassword"
									className={classNames({
										"p-error": isFormFieldValid("newPassword"),
									})}
								>
									New Password*
								</label>
							</span>
							{getFormErrorMessage("newPassword")}
						</div>
						<div className="p-field p-mb-5">
							<span className="p-float-label">
								<Password
									id="confirmPassword"
									name="confirmPassword"
									value={formik.values.confirmPassword}
									onChange={formik.handleChange}
									className={classNames({
										"p-invalid": isFormFieldValid("confirmPassword"),
									})}
									toggleMask
									feedback={false}
								/>
								<label
									htmlFor="confirmPassword"
									className={classNames({
										"p-error": isFormFieldValid("confirmPassword"),
									})}
								>
									Confirm Password*
								</label>
							</span>
							{getFormErrorMessage("confirmPassword")}
						</div>
						<Button
							label="Change Password"
							type="submit"
							className="p-button-raised p-button-secondary p-mt-4"
						/>
					</form>
				</Fieldset>
			</div>
		</>
	);
};

export default Profile;
