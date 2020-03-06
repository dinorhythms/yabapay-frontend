import React from 'react';
import { Form, Button } from "react-bootstrap";
import Icon from 'react-native-vector-icons/FontAwesome';

import { stylesColors } from '../../utils/publicVariables';

const { white, blue} = stylesColors;

const classes = {
  container: {
    paddingTop: '2rem'
  }
}

const Login = () => {
  return (
    <div style={classes.container}>
      <h6 className="mb-3">Welcome</h6>
      <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <p className="text-info">Forgot Password?</p>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      
      <Button variant="primary" type="submit" block>
        Submit
      </Button>
      <p className="mt-3">OR</p>
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
  )
}

export default Login;