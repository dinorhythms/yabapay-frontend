import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const CustomerRoute = ({ role, Layout, component: Component, ...rest }) => {

	const auth = useSelector(state => state.auth);
	const { isAuthenticated, user } = auth;

	return (
    <Route
      {...rest}
			render={ props => !isAuthenticated && (!user && role !== 'user') ? 
				(
				<Layout auth={auth} {...props}>
					<Component {...props} />
				</Layout>
				):
				<Redirect to="/login" />
      }
    />
  );
};

export default CustomerRoute;
