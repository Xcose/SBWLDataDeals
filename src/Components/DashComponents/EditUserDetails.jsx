import React, { useState, useRef, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import classNames from "classnames";
import { useFormik } from "formik";
import firebaseApp from "../../firebase";
import { AuthContext } from "../../Auth/Auth";

const EditUserDetails = ({ personalInformation }) => {
	const [editVisibleDialog, setEditVisibleDialog] = useState(false);
	const { currentUser } = useContext(AuthContext);
	// const [formData, setFormData] = useState(personalInformation);

	const toast = useRef(null);

	const showSuccess = () => {
		toast.current.show({
			severity: "success",
			summary: "Success Message",
			detail: "Data has been saved successfully",
			life: 3000,
		});
	};

	const formik = useFormik({
		initialValues: personalInformation,
		enableReinitialize: true,
		validate: (data) => {
			let errors = {};

			if (!data.name) {
				errors.name = "Name is required.";
			}
			if (!data.surname) {
				errors.surname = "Surname is required.";
			}
			if (!data.id) {
				errors.id = "Email is required.";
			} else if (
				!/(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/.test(
					data.id
				)
			) {
				errors.id = "Invalid ID number!";
			}
			if (!data.mobile) {
				errors.mobile = "Mobile number is required!";
			} else if (
				!/(^0[87][23467]((\d{7})|( |-)((\d{3}))( |-)(\d{4})|( |-)(\d{7})))/.test(
					data.mobile
				)
			) {
				errors.mobile = "Mobile number is not valid!";
			}
			if (!data.email) {
				errors.email = "Email is required!";
			} else if (
				!/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
					data.email
				)
			) {
				errors.email = "Email is invalid!";
			}
			if (!data.street) {
				errors.street = "Street is required!";
			}
			if (!data.suburb) {
				errors.suburb = "Suburb is required!";
			}
			if (!data.town) {
				errors.town = "Town is required!";
			}
			if (!data.postCode) {
				errors.postCode = "Postal Code is required!";
			}
			return errors;
		},
		onSubmit: (data) => {
			firebaseApp
				.firestore()
				.collection("personal")
				.doc(currentUser.uid)
				.update(data)
				.then(() => {
					showSuccess();
					setEditVisibleDialog(false);
					formik.resetForm();
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
			<Button
				label="Change"
				className="p-button-raised p-button-secondary p-mt-4 "
				onClick={() => {
					setEditVisibleDialog(true);
				}}
			/>
			<div className="p-grid">
				<Dialog
					header="Personal Information"
					visible={editVisibleDialog}
					className="p-col-12 p-lg-4"
					onHide={() => setEditVisibleDialog(false)}
				>
					<form onSubmit={formik.handleSubmit} className="p-fluid">
						<div className="p-field p-my-5">
							<span className="p-float-label">
								<InputText
									id="name"
									name="name"
									value={formik.values.name}
									onChange={formik.handleChange}
									autoFocus
									className={classNames({
										"p-invalid": isFormFieldValid("name"),
									})}
								/>
								<label
									htmlFor="name"
									className={classNames({
										"p-error": isFormFieldValid("name"),
									})}
								>
									Name*
								</label>
							</span>
							{getFormErrorMessage("name")}
						</div>
						<div className="p-field p-mb-5">
							<span className="p-float-label">
								<InputText
									id="surname"
									name="surname"
									value={formik.values.surname}
									onChange={formik.handleChange}
									className={classNames({
										"p-invalid": isFormFieldValid("surname"),
									})}
								/>
								<label
									htmlFor="surname"
									className={classNames({
										"p-error": isFormFieldValid("surname"),
									})}
								>
									Surname*
								</label>
							</span>
							{getFormErrorMessage("surname")}
						</div>
						<div className="p-field p-mb-5">
							<span className="p-float-label">
								<InputText
									id="id"
									name="id"
									value={formik.values.id}
									onChange={formik.handleChange}
									className={classNames({
										"p-invalid": isFormFieldValid("id"),
									})}
								/>
								<label
									htmlFor="id"
									className={classNames({
										"p-error": isFormFieldValid("id"),
									})}
								>
									ID*
								</label>
							</span>
							{getFormErrorMessage("id")}
						</div>
						<div className="p-field p-mb-5">
							<span className="p-float-label">
								<InputText
									id="mobile"
									name="mobile"
									value={formik.values.mobile}
									onChange={formik.handleChange}
									className={classNames({
										"p-invalid": isFormFieldValid("mobile"),
									})}
								/>
								<label
									htmlFor="mobile"
									className={classNames({
										"p-error": isFormFieldValid("mobile"),
									})}
								>
									mobile*
								</label>
							</span>
							{getFormErrorMessage("mobile")}
						</div>
						<div className="p-field p-mb-5">
							<span className="p-float-label">
								<InputText
									id="email"
									name="email"
									value={formik.values.email}
									onChange={formik.handleChange}
									className={classNames({
										"p-invalid": isFormFieldValid("email"),
									})}
								/>
								<label
									htmlFor="email"
									className={classNames({
										"p-error": isFormFieldValid("email"),
									})}
								>
									Email*
								</label>
							</span>
							{getFormErrorMessage("email")}
						</div>
						<div className="p-field p-mb-5">
							<span className="p-float-label">
								<InputText
									id="street"
									name="street"
									value={formik.values.street}
									onChange={formik.handleChange}
									className={classNames({
										"p-invalid": isFormFieldValid("street"),
									})}
								/>
								<label
									htmlFor="street"
									className={classNames({
										"p-error": isFormFieldValid("street"),
									})}
								>
									Street*
								</label>
							</span>
							{getFormErrorMessage("street")}
						</div>
						<div className="p-field p-mb-5">
							<span className="p-float-label">
								<InputText
									id="suburb"
									name="suburb"
									value={formik.values.suburb}
									onChange={formik.handleChange}
									className={classNames({
										"p-invalid": isFormFieldValid("suburb"),
									})}
								/>
								<label
									htmlFor="suburb"
									className={classNames({
										"p-error": isFormFieldValid("suburb"),
									})}
								>
									Suburb*
								</label>
							</span>
							{getFormErrorMessage("suburb")}
						</div>
						<div className="p-field p-mb-5">
							<span className="p-float-label">
								<InputText
									id="town"
									name="town"
									value={formik.values.town}
									onChange={formik.handleChange}
									className={classNames({
										"p-invalid": isFormFieldValid("town"),
									})}
								/>
								<label
									htmlFor="town"
									className={classNames({
										"p-error": isFormFieldValid("town"),
									})}
								>
									Town*
								</label>
							</span>
							{getFormErrorMessage("town")}
						</div>
						<div className="p-field p-mb-5">
							<span className="p-float-label">
								<InputText
									id="postCode"
									name="postCode"
									value={formik.values.postCode}
									onChange={formik.handleChange}
									className={classNames({
										"p-invalid": isFormFieldValid("postCode"),
									})}
								/>
								<label
									htmlFor="postCode"
									className={classNames({
										"p-error": isFormFieldValid("postCode"),
									})}
								>
									Postal Code*
								</label>
							</span>
							{getFormErrorMessage("postCode")}
						</div>
						<Button
							label="Save"
							type="submit"
							icon="pi pi-save"
							className="p-button-raised p-button-secondary p-d-block p-mt-4 p-w-100"
						/>
					</form>
				</Dialog>
			</div>
		</>
	);
};

export default EditUserDetails;
