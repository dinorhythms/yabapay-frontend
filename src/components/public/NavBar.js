import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { stylesColors } from '../../utils/publicVariables';

const { blue } = stylesColors;

const classes = {
  button: {
    backgroundColor: blue
  }
}

export default function NavBar() {
  return (
    <Navbar expand="md" fixed="top" variant="light" bg="light" className="pt-3 pb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">YabaPay</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link as={Link} to="/about-us">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <div>
            <Button variant="outline-primary" className="mr-2">Login</Button>
            <Button variant="primary" style={classes.button}>Signup</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
