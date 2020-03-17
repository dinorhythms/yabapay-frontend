import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import AuthModal from './AuthModal';

import { stylesColors } from '../../utils/publicVariables';

const { blue } = stylesColors;

const classes = {
  button: {
    backgroundColor: blue,
    color: '#ffffff'
  },
}

export default function NavBar() {

  const [modalShow, setModalShow] = React.useState(false);
  const [key, setKey] = React.useState('home');

  const handleModal = (key) => {
    setKey(key)
    setModalShow(true)
  }

  return (
    <Navbar expand="md" fixed="top" bg="light" variant="light" className="pt-3 pb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">YabaPay</Navbar.Brand>
        <div className="d-block d-md-none">
          <Button variant="light" onClick={() => handleModal('login')}>Login</Button>
          <Button variant="warning ml-4" className="pl-4 pr-4" onClick={() => handleModal('signup')}>Signup</Button>
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
            <Button variant="light" onClick={() => handleModal('login')}>Login</Button>
            <Button variant="ml-4" style={classes.button} className="pl-4 pr-4" onClick={() => handleModal('signup')}>Signup</Button>
          </div>
        </Navbar.Collapse>
        <AuthModal
          show={modalShow}
          navkey={key}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </Navbar>
  )
}
