import React from "react";
import { Button, Form } from "react-bootstrap";
import Icon from "react-native-vector-icons/FontAwesome";
import { stylesColors } from "../../utils/publicVariables";
import { useHistory } from "react-router-dom";

const { blue } = stylesColors;

const classes = {
	container: {
		paddingTop: "2rem"
	}
};

const Login = () => {

  const { push } = useHistory();
	const handleLogin = () => {push('/users')};

	return (
		<div style={classes.container}>
			<h2 className="mb-3">Login</h2>
			<h6 className="mb-3">Welcome back</h6>
			<Form>
				<Form.Group controlId="loginEmail">
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group controlId="loginPassword">
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<div className="d-flex justify-content-between">
					<Form.Group controlId="loginCheckbox">
						<Form.Check type="checkbox" label="Remember me" />
					</Form.Group>
					<p className="text-warning">Forgot Password?</p>
				</div>

				<Button variant="primary" onClick={handleLogin} block>
					Submit
				</Button>

				<p className="mt-3">Login With</p>
				<Button variant="light" block>
					<Icon name="google" size={20} color={blue} className="mr-2" /> Google
				</Button>
				<Button variant="light" block>
					<Icon name="facebook" size={20} color={blue} className="mr-2" />{" "}
					Facebook
				</Button>
			</Form>
		</div>
	);
};

export default Login;
