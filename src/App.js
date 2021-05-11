import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import history from "./history";
import Navigation from "./Shared/Navigation";
import { AuthProvider } from "./Auth/Auth";
import PrivateRoute from "./Shared/PrivateRoute";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Home from "./Pages/Home";
import Calender from "./Pages/Calender";
import Settings from "./Pages/Settings";
import Edit from "./Pages/Edit";
import SignUp from "./Pages/SignUp";
import Dash from "./Pages/Dashboard";
import Documentation from "./Pages/Documentation";
import { ScrollTop } from "primereact/scrolltop";

function App() {
	return (
		<AuthProvider>
			<Router>
				<div className="App p-h-100">
					<ReactNotification />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={Calender} />
						<Route path="/gallery" component={Edit} />
						<Route path="/contact" component={Documentation} />
						<Route path="/signUp" component={SignUp} />
						<Route path="/login" component={Settings} />
						<PrivateRoute path="/dash" component={Dash} />
					</Switch>
					<ScrollTop threshold={200} icon="pi pi-angle-double-up" />
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
