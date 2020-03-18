import React from 'react';
import { Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from "react-native-vector-icons/FontAwesome";

import './sideBar.css';

 const SideBarMenu = () => {

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  // }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  //   document.getElementById("main").style.marginLeft = "0";
  // }

  return (
    <Col xs={12} md={2} className="SideNav d-none d-sm-block">
      <div id="mySidenav">
        <Nav defaultActiveKey="/home" className="flex-column">
          <div className="d-flex pl-3 mb-3">
            <Icon name="user-circle" size={35} color="black" />
            <h6 className="ml-3" style={{color: 'rgb(255, 128, 0)'}}>Tunmi Williams <br/> <small>Last Login: 2 Days Ago </small></h6>
          </div>
          
          <Nav.Link as={Link} to="/users" >Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/users/fund-wallet">Fund Wallet</Nav.Link>
          <Nav.Link as={Link} to="/users/transactions">Transactions</Nav.Link>
          <Nav.Link as={Link} to="/users/profile">Profile</Nav.Link>
          <hr/>
          <h6 className="ml-3 text-dark">Services</h6>
          <Nav.Link as={Link} to="/users/airtime" eventKey="link-2">Buy Airtime</Nav.Link>
          <Nav.Link as={Link} to="/users/data" eventKey="link-1">Buy Data</Nav.Link>
          <Nav.Link as={Link} to="/users/power">Pay Power Bill</Nav.Link>
          <Nav.Link as={Link} to="/users/cable">Cable TV</Nav.Link>
          <Nav.Link as={Link} to="/users/">Buy Ticket</Nav.Link>
        </Nav>
      </div>
    </Col>
  )
}

export default SideBarMenu;