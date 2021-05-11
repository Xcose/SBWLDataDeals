import React, { useState } from "react";
import Navigation from "../Shared/Navigation";
import { Steps } from "primereact/steps";
import Personl from "../Components/Signup/Personl";
import Package from "../Components/Signup/Package";
import Delivery from "../Components/Signup/Delivery";
import Summary from "../Components/Signup/Summary";

const SignUp = () => {
	const [activeStep, setActiveStep] = useState(0);

	const items = [
		{ label: "Personal" },
		{ label: "Package" },
		{ label: "Delivery" },
		{ label: "Summary" },
	];

	let initPersonalInformation = {
		name: null,
		surname: null,
		id: null,
		email: null,
		mobile: null,
		password: null,
		confirmPassword: null,
	};
	let initDeliveryInformation = {
		street: null,
		suburb: null,
		town: null,
		postCode: null,
	};
	const [personalInformation, setPersonalInformation] = useState(
		initPersonalInformation
	);
	const [deliveryInformation, setDeliveryInformation] = useState(
		initDeliveryInformation
	);
	const [packageInformation, setPackageInformation] = useState(null);
	const [errors, setErrors] = useState({});

	const onPersonalChange = (e) => {
		let UpdatedPersonalInformtion = personalInformation;
		UpdatedPersonalInformtion[e.target.name] = e.target.value;
		setPersonalInformation(UpdatedPersonalInformtion);
	};
	const onDeliveryChange = (e) => {
		let UpdatedDeliveryInformtion = deliveryInformation;
		UpdatedDeliveryInformtion[e.target.name] = e.target.value;
		setDeliveryInformation(UpdatedDeliveryInformtion);
	};

	const onPackageChange = (deal) => {
		setPackageInformation(deal);
	};

	const next = (validation, values) => {
		const validationErrors = validation(values);

		// console.log(values);
		if (Object.keys(validationErrors).length === 0) {
			setActiveStep(activeStep + 1);
		} else {
			setErrors(validationErrors);
		}
	};

	const back = () => {
		setActiveStep(activeStep - 1);
	};

	const steps = () => {
		switch (activeStep) {
			case 0:
				return (
					<Personl
						personalInformation={personalInformation}
						next={next}
						errors={errors}
						onPersonalChange={onPersonalChange}
					/>
				);
			case 1:
				return (
					<Package
						packageInformation={packageInformation}
						next={next}
						back={back}
						errors={errors}
						onPackageChange={onPackageChange}
					/>
				);
			case 2:
				return (
					<Delivery
						deliveryInformation={deliveryInformation}
						next={next}
						back={back}
						errors={errors}
						onDeliveryChange={onDeliveryChange}
					/>
				);
			case 3:
				return (
					<Summary
						personalInformation={personalInformation}
						deliveryInformation={deliveryInformation}
						packageInformation={packageInformation}
						back={back}
					/>
				);

			default:
				break;
		}
	};

	return (
		<>
			<div className="hero">
				<Navigation />
				<Steps model={items} activeIndex={activeStep} className="p-p-5" />
				<div className="p-grid p-jc-center">
					<div className="p-col-12 p-lg-4 p-p-lg-4 outline">{steps()}</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
