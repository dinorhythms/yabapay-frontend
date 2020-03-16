import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavBarMenu() {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="#home">Yabapay</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#link">Transactions</Nav.Link>
          <NavDropdown title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
