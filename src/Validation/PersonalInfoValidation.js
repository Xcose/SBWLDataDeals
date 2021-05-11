function PersonalInfoValdation(values) {
	let errors = {};

	if (!values.name) {
		errors.name = "Name is required!";
	}
	if (!values.surname) {
		errors.surname = "Surname is required!";
	}
	if (!values.id) {
		errors.id = "ID is required!";
	} else if (
		!/(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/.test(
			values.id
		)
	) {
		errors.id = "ID number is not valid!";
	}
	if (!values.mobile) {
		errors.mobile = "Mobile number is required!";
	} else if (
		!/(^0[87][23467]((\d{7})|( |-)((\d{3}))( |-)(\d{4})|( |-)(\d{7})))/.test(
			values.mobile
		)
	) {
		errors.mobile = "Mobile number is not valid!";
	}
	if (!values.email) {
		errors.email = "Email is required!";
	} else if (
		!/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
			values.email
		)
	) {
		errors.email = "Email is invalid!";
	}
	if (!values.password) {
		errors.password = "Password is required!";
	} else if (!/^([a-zA-Z0-9@*#]{8,15})$/.test(values.password)) {
		errors.password =
			"Password must be between 8 and 15 characters. Match all alphanumeric character and predefined wild characters!";
	}
	if (!values.confirmPassword) {
		errors.confirmPassword = "Confirm Password is required!";
	} else if (values.confirmPassword !== values.password) {
		errors.confirmPassword = "Password does not match!";
	}

	return errors;
}
export default PersonalInfoValdation;
