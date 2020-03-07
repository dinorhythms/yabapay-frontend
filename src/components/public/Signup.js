import React from "react";
import { Button, Form } from "react-bootstrap";
import Icon from "react-native-vector-icons/FontAwesome";
import { stylesColors } from "../../utils/publicVariables";

const { blue } = stylesColors;

const classes = {
	container: {
		paddingTop: "2rem"
	}
};

const Signup = () => {
	return (
		<div style={classes.container}>
			<h6 className="mb-3">Register to get started</h6>
			<Form>
				<Form.Group controlId="signupEmail">
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

        <Form.Group controlId="signupPhone">
					<Form.Control type="phone" placeholder="Enter phone number +234" />
				</Form.Group>

				<Form.Group controlId="signupPassword">
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

        <Form.Group controlId="signupConfirmPassword">
					<Form.Control type="password" placeholder="Confirm Password" />
				</Form.Group>

				<Button variant="primary" type="submit" block>
					Signup
				</Button>
				<p className="mt-3">SignUp With</p>
				<Button variant="light" block>
					<Icon name="google" size={20} color={blue} className="mr-2" />
					Google
				</Button>
				<Button variant="light" block>
					<Icon name="facebook" size={20} color={blue} className="mr-2" />
					Facebook
				</Button>
			</Form>
		</div>
	);
};

export default Signup;
