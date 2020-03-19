import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from "react-native-vector-icons/FontAwesome";

export default function NavBarMenu() {
  return (
    <Navbar collapseOnSelect fixed="top" bg="light" className="text-white border-bottom border-primary" expand="md">
      <Navbar.Brand href="#home">Yabapay</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav defaultActiveKey="/home" className="flex-column d-block d-md-none pt-4 pl-0 pb-4">
          <Nav.Link as={Link} to="/users" eventKey="link-2"><Icon name="dashboard" size={15} color="black" /> Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/users/fund-wallet" eventKey="link-2"><Icon name="arrow-circle-right" size={15} color="black" /> Fund Wallet</Nav.Link>
          <Nav.Link as={Link} to="/users/transactions" eventKey="link-2"><Icon name="transgender-alt" size={15} color="black" /> Transactions</Nav.Link>
          <Nav.Link as={Link} to="/users/profile" eventKey="link-2"><Icon name="user-circle" size={15} color="black" /> Profile</Nav.Link>
          <Nav.Link as={Link} to="/users/beneficiaries" eventKey="link-2"><Icon name="address-book" size={15} color="black" /> Beneficiaries</Nav.Link>
          <Nav.Link as={Link} to="/users/topup-history" eventKey="link-2"><Icon name="address-book" size={15} color="black" /> Topup History</Nav.Link>
          <hr/>
          <h6 className=" text-dark">Services</h6>
          <Nav.Link as={Link} to="/users/airtime" eventKey="link-2"><Icon name="phone-square" size={15} color="black" /> Buy Airtime</Nav.Link>
          <Nav.Link as={Link} to="/users/data" eventKey="link-1"><Icon name="globe" size={15} color="black" /> Buy Data</Nav.Link>
          <Nav.Link as={Link} to="/users/power" eventKey="link-2"><Icon name="power-off" size={15} color="black" /> Pay Power Bill</Nav.Link>
          <Nav.Link as={Link} to="/users/cable" eventKey="link-2"><Icon name="tv" size={15} color="black" /> Cable TV</Nav.Link>
          <Nav.Link as={Link} to="/users/" eventKey="link-2"><Icon name="plane" size={15} color="black" /> Buy Ticket</Nav.Link>
          <Nav.Link as={Link} to="/users/logout" className="mt-4" eventKey="link-2"><Icon name="lock" size={15} color="black" /> Logout</Nav.Link>
        </Nav>
        <Nav className="ml-auto d-none d-sm-block">
          <NavDropdown title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item eventKey="link-2" as={Link} to="/users/profile">My Profile</NavDropdown.Item>
            <NavDropdown.Item eventKey="link-2" as={Link} to="/users/update-password">Change Password</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="link-2" as={Link} to="/">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
