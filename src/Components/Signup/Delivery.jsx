import React, { Component } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Validation from "../../Validation/DeliveryInfoValidation";

const Delivery = ({
	deliveryInformation,
	next,
	back,
	errors,
	onDeliveryChange,
}) => {
	return (
		<>
			<form>
				<div className="p-field">
					<InputText
						className="p-w-100 p-mt-4"
						id="street"
						placeholder="Street"
						name="street"
						defaultValue={deliveryInformation.street}
						onChange={(e) => {
							onDeliveryChange(e);
						}}
					/>
					{errors.street && (
						<small id="username2-help" className="">
							{errors.street}
						</small>
					)}
				</div>
				<div className="p-field">
					<InputText
						className="p-w-100 p-mt-4"
						id="suburb"
						placeholder="Suburb"
						name="suburb"
						defaultValue={deliveryInformation.suburb}
						onChange={(e) => {
							onDeliveryChange(e);
						}}
					/>
					{errors.suburb && (
						<small id="username2-help" className="">
							{errors.suburb}
						</small>
					)}
				</div>
				<div className="p-field">
					<InputText
						className="p-w-100 p-mt-4"
						id="town"
						placeholder="Town"
						name="town"
						defaultValue={deliveryInformation.town}
						onChange={(e) => {
							onDeliveryChange(e);
						}}
					/>
					{errors.town && (
						<small id="username2-help" className="">
							{errors.town}
						</small>
					)}
				</div>
				<div className="p-field">
					<InputText
						className="p-w-100 p-mt-4"
						id="postCode"
						placeholder="Postal Code"
						name="postCode"
						defaultValue={deliveryInformation.postCode}
						onChange={(e) => {
							onDeliveryChange(e);
						}}
					/>
					{errors.postCode && (
						<small id="username2-help" className="">
							{errors.postCode}
						</small>
					)}
				</div>
			</form>
			<Button
				label="Next"
				className="p-button-raised p-button-secondary p-d-block p-mt-4 p-w-100"
				onClick={() => {
					next(Validation, deliveryInformation);
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

export default Delivery;
