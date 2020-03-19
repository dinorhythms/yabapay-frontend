import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBarMenu() {
  return (
    <Navbar fixed="top" bg="light" className="text-white border-bottom border-primary" expand="lg">
      <Navbar.Brand href="#home">Yabapay</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/users/transactions">Transactions</Nav.Link>
          <NavDropdown title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item  as={Link} to="/users/profile">My Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  as={Link} to="/">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
