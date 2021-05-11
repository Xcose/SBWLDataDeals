import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import firebaseApp from "../../firebase";

const DashSideMenu = ({ name, surname, setActiveTab }) => {
	const [visibleLeft, setVisibleLeft] = useState(false);
	const [signOutVisible, setSignOutVisible] = useState(false);
	let items = [
		{
			label: "Connectivity",
			icon: "pi pi-fw pi-plus",
			command: () => {
				setActiveTab(1);
				setVisibleLeft(false);
			},
		},
		{
			label: "Profile",
			icon: "pi pi-fw pi-trash",
			command: () => {
				setActiveTab(2);
				setVisibleLeft(false);
			},
		},
		{
			label: "Billing",
			icon: "pi pi-fw pi-trash",
			command: () => {
				setActiveTab(3);
				setVisibleLeft(false);
			},
		},
	];

	const confirm = () => {
		confirmDialog({
			message: "Are you sure you want to sign out?",
			header: "You are about to sign out",
			icon: "pi pi-exclamation-triangle",
			accept: () => {
				signOut();
			},
		});
	};

	const signOut = () => {
		firebaseApp.auth().signOut();
	};
	return (
		<div className="">
			<Button
				icon="pi pi-bars"
				label="Menu"
				onClick={() => setVisibleLeft(true)}
				className="p-button-secondary"
				style={{ float: "left" }}
			/>
			<Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
				<h1 style={{ fontWeight: "normal" }}>
					Welcome {name} {surname}
				</h1>
				<Menu model={items} className="p-w-100" />
				<Button
					type="button"
					onClick={confirm}
					label="Sign out"
					className="p-button-secondary p-mt-5"
					style={{ marginRight: ".25em" }}
				/>
			</Sidebar>
		</div>
	);
};

export default DashSideMenu;
