import React, { useState, useEffect, useContext } from "react";
import { SuccessMessage, ErrorMessage } from "../Shared/Notifications";
import { AuthContext } from "../Auth/Auth";
import firebaseApp from "../firebase";
import DashSideMenu from "../Components/DashComponents/DashSideMenu";
import DataInformation from "../Components/DashComponents/DataInformation";
import Profile from "../Components/DashComponents/Profile";
import Billing from "../Components/DashComponents/Billing";

const Dashboard = () => {
	const initialPassword = {
		oldPassword: null,
		newPassword: null,
		confirmPassword: null,
	};
	const [personalInformation, setPersonalInformation] = useState({});
	const [passwordData, setPasswordData] = useState(initialPassword);
	const [activeTab, setActiveTab] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState({});
	const { currentUser } = useContext(AuthContext);

	const [dataPackage, setDataPackage] = useState({});

	useEffect(() => {
		fetchData();
	}, [currentUser]);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			await firebaseApp
				.firestore()
				.collection("personal")
				.doc(currentUser.uid)
				.onSnapshot((doc) => {
					const data = doc.data();
					setPersonalInformation(data);
				});

			const productInfo = await firebaseApp
				.firestore()
				.collection("product")
				.doc(currentUser.uid)
				.get();

			setDataPackage(productInfo.data());
		} catch (err) {
			const message = err.message.toString();
			ErrorMessage(message);
		}
		setIsLoading(false);
	};

	const Tabs = () => {
		switch (activeTab) {
			case 1:
				return <DataInformation dataPackage={dataPackage} />;
				break;
			case 2:
				return <Profile personalInformation={personalInformation} />;
				break;
			case 3:
				return <Billing />;
				break;
			default:
				break;
		}
	};

	const { name, surname } = personalInformation;
	return (
		<div>
			<div className="p-grid p-justify-center p-m-0 p-p-5">
				<div className="p-col-12">
					<DashSideMenu
						name={name}
						surname={surname}
						setActiveTab={setActiveTab}
					/>
				</div>
				{Tabs()}
			</div>
		</div>
	);
};

export default Dashboard;
