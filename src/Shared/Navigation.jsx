import React, { useState, useEffect } from "react";
import { Menubar } from "primereact/menubar";
import { useHistory } from "react-router-dom";
import logo from "../Images/Logo2.png";
import LoginDialog from "../Components/Login";

const Navigation = () => {
	const history = useHistory();
	const [loginVisible, setLoginVisible] = useState(false);
	const [activeItem, setActiveItem] = useState();
	const [path, setPath] = useState();

	const start = (
		<img
			alt="logo"
			src={logo}
			onError={(e) =>
				(e.target.src =
					"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
			}
			height="40"
			className="p-mr-2"
		></img>
	);

	useEffect(() => {
		history.push(path);
	}, [path]);

	const onMenuClick = (e) => {
		setPath(e.item.to);
		// 	setActiveItem(e.value);
	};

	const items = [
		{
			label: "Home",
			to: "/",
			command: (e) => {
				onMenuClick(e);
			},
		},
		{
			label: "About",
			to: "/about",
			command: (e) => {
				onMenuClick(e);
			},
		},
		{
			label: "Deals",
			url: "#deals",
		},
		{
			label: "Contact us",
			url: "#contact",
		},
		{
			label: "Sign up",
			to: "/signUp",
			command: (e) => {
				onMenuClick(e);
			},
		},
		{
			label: "Login",
			to: "/login",
			command: (e) => {
				// onMenuClick(e);
				setLoginVisible(true);
			},
		},
	];

	return (
		<>
			<Menubar
				className="bg-transparent p-px-5 navigation"
				model={items}
				start={start}
			/>
			<LoginDialog
				loginVisible={loginVisible}
				setLoginVisible={setLoginVisible}
			/>
		</>
	);
};

export default Navigation;
