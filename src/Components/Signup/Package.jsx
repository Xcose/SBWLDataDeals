import React, { Component } from "react";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { SelectButton } from "primereact/selectbutton";
import deals from "../../DummyData/deals";
import Validation from "../../Validation/PackageInfoValidation";

const Package = ({
	packageInformation,
	next,
	back,
	errors,
	onPackageChange,
}) => {
	return (
		<>
			<SelectButton
				value={packageInformation}
				options={deals}
				onChange={(e) => onPackageChange(e.value)}
				optionLabel="name"
			/>
			{errors.package && (
				<small id="username2-help" className="">
					{errors.package}
				</small>
			)}
			<Button
				label="Next"
				className="p-button-raised p-button-secondary p-d-block p-mt-4 p-w-100"
				onClick={() => {
					next(Validation, packageInformation);
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

export default Package;
