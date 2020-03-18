import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

import { stylesColors } from '../../utils/publicVariables';

const { blue } = stylesColors;

const classes = {
  button: {
    backgroundColor: blue,
    color: '#ffffff'
  },
}

export default function NavBar() {

  const [modalShowLogin, setModalShowLogin] = React.useState(false);
  const [modalShowSignup, setModalShowSignup] = React.useState(false);

  return (
    <Navbar expand="md" fixed="top" bg="light" variant="light" className="pt-3 pb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">YabaPay</Navbar.Brand>
        <div className="d-block d-md-none">
          <Button variant="light" onClick={() =>setModalShowLogin(true)}>Login</Button>
          <Button variant="warning ml-4" className="pl-4 pr-4" onClick={() => setModalShowSignup(true)}>Signup</Button>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About</Nav.Link>
            <Nav.Link as={Link} to="/features">Features</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <div className="d-none d-md-block">
            <Button variant="light" onClick={() => setModalShowLogin(true)}>Login</Button>
            <Button variant="ml-4" style={classes.button} className="pl-4 pr-4" onClick={() => setModalShowSignup(true)}>Signup</Button>
          </div>
        </Navbar.Collapse>
        <LoginModal
          show={modalShowLogin}
          onHide={() => setModalShowLogin(false)}
        />
        <SignUpModal
          show={modalShowSignup}
          onHide={() => setModalShowSignup(false)}
        />
      </Container>
    </Navbar>
  )
}
