import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import Validation from "../../Validation/PersonalInfoValidation";

const Personl = ({ personalInformation, next, errors, onPersonalChange }) => {
	return (
		<>
			<form>
				<div className="p-field">
					<InputText
						className="p-w-100 p-mt-4"
						id="Name"
						placeholder="Name"
						name="name"
						defaultValue={personalInformation.name}
						onChange={(e) => {
							onPersonalChange(e);
						}}
					/>
					{errors.name && (
						<small id="username2-help" className="">
							{errors.name}
						</small>
					)}
				</div>
				<div className="p-field">
					<InputText
						className="p-w-100 p-mt-4"
						id="surname"
						placeholder="surname"
						name="surname"
						defaultValue={personalInformation.surname}
						onChange={(e) => {
							onPersonalChange(e);
						}}
					/>
					{errors.surname && (
						<small id="username2-help" className="">
							{errors.surname}
						</small>
					)}
				</div>
				<div className="p-field">
					<InputText
						className="p-w-100 p-mt-4"
						id="ID"
						placeholder="ID"
						name="id"
						defaultValue={personalInformation.id}
						onChange={(e) => {
							onPersonalChange(e);
						}}
					/>
					{errors.id && (
						<small id="username2-help" className="">
							{errors.id}
						</small>
					)}
				</div>
				<div className="p-field">
					<InputText
						className="p-w-100 p-mt-4"
						id="email"
						placeholder="email"
						name="email"
						defaultValue={personalInformation.email}
						onChange={(e) => {
							onPersonalChange(e);
						}}
					/>
					{errors.email && (
						<small id="username2-help" className="">
							{errors.email}
						</small>
					)}
				</div>
				<div className="p-field">
					<InputText
						className="p-w-100 p-mt-4"
						id="mobile"
						placeholder="mobile"
						name="mobile"
						keyfilter="int"
						defaultValue={personalInformation.mobile}
						onChange={(e) => {
							onPersonalChange(e);
						}}
					/>
					{errors.mobile && (
						<small id="username2-help" className="">
							{errors.mobile}
						</small>
					)}
				</div>
				<div className="p-field">
					<Password
						className="p-mt-4"
						id="password"
						placeholder="password"
						name="password"
						toggleMask
						defaultValue={personalInformation.password}
						onChange={(e) => {
							onPersonalChange(e);
						}}
					/>
					{errors.password && (
						<small id="username2-help" className="">
							{errors.password}
						</small>
					)}
				</div>
				<div className="p-field">
					<Password
						className="p-mt-4"
						id="confirmPassword"
						placeholder="Confirm Password"
						name="confirmPassword"
						toggleMask
						defaultValue={personalInformation.confirmPassword}
						onChange={(e) => {
							onPersonalChange(e);
						}}
					/>
					{errors.confirmPassword && (
						<small id="username2-help" className="">
							{errors.confirmPassword}
						</small>
					)}
				</div>
			</form>
			<Button
				label="Next"
				className="p-button-raised p-button-secondary p-d-block p-mt-4 p-w-100"
				onClick={() => {
					next(Validation, personalInformation);
				}}
			/>
		</>
	);
};

export default Personl;
