import React from "react";
import { Switch, withRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./screens/customers/Dashboard";
import AboutUs from "./screens/public/AboutUs";
import AirtimePage from "./screens/public/AirtimePage";
import AirtimePayPage from "./screens/public/AirtimePayPage";
import CablePage from "./screens/public/CablePage";
import CablePayPage from "./screens/public/CablePayPage";
import ContactPage from "./screens/public/ContactPage";
import DataPage from "./screens/public/DataPage";
import DataPayPage from "./screens/public/DataPayPage";
import FeaturesPage from "./screens/public/FeaturesPage";
// Public Screens
import HomePage from "./screens/public/HomePage";
import NotFound from "./screens/public/NotFound";
import PowerPage from "./screens/public/PowerPage";
import PowerPayPage from "./screens/public/PowerPayPage";
import CustomerLayout from "./services/CustomerLayout";
import CustomerRoute from "./services/CustomerRoute";
// Routes & Layouts
import PublicRoute from "./services/PublicRoute";
import BuyAirtime from "./screens/customers/BuyAirtime";
import PayAirtime from "./screens/customers/PayAirtime";
import Transaction from "./screens/customers/Transactions";
import BuyData from "./screens/customers/BuyData";
import PayData from "./screens/customers/PayData";

function App(props) {
	return (
		<>
			<Switch>
				<PublicRoute exact path="/" component={HomePage} />
				<PublicRoute path="/about-us" component={AboutUs} />
				<PublicRoute path="/features" component={FeaturesPage} />
				<PublicRoute path="/contact" component={ContactPage} />
				<PublicRoute exact path="/airtime" component={AirtimePage} />
				<PublicRoute exact path="/data" component={DataPage} />
				<PublicRoute exact path="/power" component={PowerPage} />
				<PublicRoute exact path="/cable" component={CablePage} />
				<PublicRoute
					exact
					path="/airtime/:provider"
					component={AirtimePayPage}
				/>
				<PublicRoute exact path="/data/:provider" component={DataPayPage} />
				<PublicRoute exact path="/power/:provider" component={PowerPayPage} />
				<PublicRoute exact path="/cable/:provider" component={CablePayPage} />
				<CustomerRoute
					exact={true}
					path="/users"
					component={Dashboard}
					Layout={CustomerLayout}
					{...props}
				/>
				<CustomerRoute
					exact={true}
					path="/users/airtime"
					component={BuyAirtime}
					Layout={CustomerLayout}
					{...props}
				/>
				<CustomerRoute
					exact={true}
					path="/users/airtime/:provider"
					component={PayAirtime}
					Layout={CustomerLayout}
					{...props}
				/>
				<CustomerRoute
					exact={true}
					path="/users/transactions"
					component={Transaction}
					Layout={CustomerLayout}
					{...props}
				/>
				<CustomerRoute
					exact={true}
					path="/users/data"
					component={BuyData}
					Layout={CustomerLayout}
					{...props}
				/>
				<CustomerRoute
					exact={true}
					path="/users/data/:provider"
					component={PayData}
					Layout={CustomerLayout}
					{...props}
				/>
				<PublicRoute component={NotFound} />
			</Switch>
		</>
	);
}

export default withRouter(App);
