import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { stylesColors } from '../../utils/publicVariables';
import AuthModal from './AuthModal';

const { blue } = stylesColors;

const classes = {
  button: {
    backgroundColor: blue
  }
}

export default function NavBar() {

  const [modalShow, setModalShow] = React.useState(false);
  const [key, setKey] = React.useState('home');

  const handleModal = (key) => {
    setKey(key)
    setModalShow(true)
  }

  return (
    <Navbar expand="md" fixed="top" variant="light" bg="light" className="pt-3 pb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">YabaPay</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link as={Link} to="/about-us">About</Nav.Link>
            <Nav.Link as={Link} to="/features">Features</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <div>
            <Button variant="outline-primary" className="mr-2" onClick={() => handleModal('login')}>Login</Button>
            <Button variant="primary" style={classes.button} onClick={() => handleModal('signup')}>Signup</Button>
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
